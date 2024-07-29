const {Duplex,PassThrough} = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const writeStream = createWriteStream('./file.txt');

readStream= createReadStream('./duplex.txt');

class Throttle extends Duplex{
    constructor(ms){
        super();
        this.delay=ms;
    }
    _read(){

    }
    _write(chunk,encoding,callback){
        this.push(chunk);
        setTimeout(callback,this.delay);
    }

    _final(){
        this.push(null);
    }
}
const report = new PassThrough();
const throttle = new Throttle(10);
let total =0;
report.on('data',(chunk)=>{
    total +=chunk.length;
    console.log('bytes:',total);
})

readStream.pipe(throttle).pipe(report).pipe(writeStream);