import React from 'react'
import Post from './Post/Post'
import {useSelector} from 'react-redux';
import {useStyles,theme} from './styles'
import { ThemeProvider } from '@mui/material/styles';
const Posts = () => {
  const classes = useStyles();
  const posts = useSelector(state => state.posts);
  console.log(posts);
  return (
    <ThemeProvider theme={theme}>
      <div>
      <h1>POSTS</h1>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
    </ThemeProvider>

    
  )
}

export default Posts
