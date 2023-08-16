import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux'; // fetch the data from global redux store

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts); // inside useSelector hook we have a callback function as a parameter in that call backfunction
  // we get access to whole global redux store and we return state.posts from reducers -> index.js posts
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs = {7}> 
          
            <Post post={post} setCurrentId={setCurrentId} />

            Post is just a component 
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
