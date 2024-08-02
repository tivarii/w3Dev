import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories-Logo.png";
import useStyles from './styles'
import { getPosts } from "./actions/posts";
function App() {
  const dispatch=useDispatch();
  const classes = useStyles();

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])


  return (
    <>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img className={classes.image} src={memories} alt="memories" height="60"></img>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form></Form>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
