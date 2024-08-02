const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const async = require('async');
const cors = require('cors');

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: 'your_access_key',
  secretAccessKey: 'your_secret_key',
  region: 'your_region'
});

// One Shot Upload
app.post('/upload/oneshot', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = path.join(__dirname, file.path);
  const fileContent = fs.readFileSync(filePath);
  const params = {
    Bucket: 'your_bucket_name',
    Key: file.originalname,
    Body: fileContent
  };

  s3.upload(params, (err, data) => {
    fs.unlinkSync(filePath); // Delete the file from the server
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});

// Parallel Uploads
// app.post('/upload/parallel', upload.single('file'), (req, res) => {
//   const file = req.file;
//   if (!file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   const chunkSize = 100 * 1024 * 1024; // 100MB
//   const filePath = path.join(__dirname, file.path);
//   //converting file in the form of chunks
//   const fileStream = fs.createReadStream(filePath, { highWaterMark: chunkSize });
//   const chunks = [];

//   //pushing chunks of chunksize in chunks[]
//   fileStream.on('data', (chunk) => {
//     chunks.push(chunk);
//   });

//   fileStream.on('end', () => {
//     async.eachOfLimit(chunks, 6, (chunk, index, callback) => {
//       const params = {
//         Bucket: 'your_bucket_name',
//         Key: `${file.originalname}.part${index}`,
//         Body: chunk
//       };

//       s3.upload(params, (err, data) => {
//         if (err) {
//           return callback(err);
//         }
//         callback();
//       });
//     }, (err) => {
//       fs.unlinkSync(filePath); // Delete the file from the server
//       if (err) {
//         return res.status(500).send(err);
//       }
//       res.status(200).send('File uploaded in parallel chunks.');
//     });
//   });
// });

app.post('upload/upload_parallel', upload.single("file"), (req, res) => {
    const file = req.file
      // params for s3 upload
      const params = {
          Bucket: bucketName,
          Key: `${Date.now().toString()}_${file.originalname}`,
          Body: file.buffer,
      }
  
      try {
          // upload file to s3 parallelly in chunks
          // it supports min 100MB of file size
          const uploadParallel = new Upload({
              client: s3,
              queueSize: 6, // optional concurrency configuration
              partSize: 100 * 1024 * 1024, // optional size of each part
              leavePartsOnError: false, // optional manually handle dropped parts
              params,
          })
  
          // checking progress of upload
          uploadParallel.on("httpUploadProgress", progress => {
              console.log(progress)
          })
  
          // after completion of upload
          uploadParallel.done().then(data => {
              console.log("upload completed!", { data })
              return res.json({ success: true, data: data.Location })
          })
      } catch (error) {
          res.send({
              success: false,
              message: error.message,
          })
      }
  });


// Direct Upload to AWS S3
// Endpoint to handle the file upload and direct upload to S3
app.post('/upload/s3', upload.single('file'), async (req, res) => {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }
  
    const filePath = path.join(__dirname, file.path);
    const fileStream = fs.createReadStream(filePath);
  
    try {
      // Generate pre-signed URL
      const params = {
        Bucket: 'your_bucket_name',
        Key: file.originalname,
        ContentType: file.mimetype,
        Expires: 60 // URL expires in 60 seconds
      };
  
      const url = s3.getSignedUrl('putObject', params);
      //here I can send this url to frontend and upload the  file from the frontend too.
  
      // Upload file to S3 using the pre-signed URL
      await axios.put(url, fileStream, {
        headers: {
          'Content-Type': file.mimetype
        }
      });
  
      // Delete the file from the server
      fs.unlinkSync(filePath);
  
      // Send success response
      res.status(200).send('File uploaded directly to S3.');
    } catch (err) {
      // Delete the file from the server in case of error
      fs.unlinkSync(filePath);
      res.status(500).send(err);
    }
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
