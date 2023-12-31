import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

//action creators are the functions that return action
//action is then just a object that has a type and payload

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); //we are getting response from the api {data},
    // that we are returing from backend, data represents the posts
    //alternate easy line of code
    // const action = {type: FETCH_ALL, payload: data};
    //instead of return we use dispatch
    // dispatch(action);
    dispatch({ type: FETCH_ALL, payload: data }); // payload is the data where we store our posts
  } catch (error) {
    console.log(error.message);
  }
};

// this is async function, to fetch all our posts, some time is passed.. here we make a call to another function 

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
