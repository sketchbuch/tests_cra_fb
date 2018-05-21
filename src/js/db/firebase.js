// @flow

import * as firebase from 'firebase';
import postDefault, { PostFactory } from '../types/post';

let database;


/**
* Firebase stuff.
*/
export function init() {
  let config = {
    apiKey: "AIzaSyAtboMpuzCZTcMN8vzreCwbNdrlSlxPesA",
    authDomain: "test-40155.firebaseapp.com",
    databaseURL: "https://test-40155.firebaseio.com",
    projectId: "test-40155",
    storageBucket: "test-40155.appspot.com",
    messagingSenderId: "405838444178"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}

/**
* Get all posts.
*/
export function getAllPosts() {
  return database.ref('/').once('value');
}

/**
* Get post by ID.
*/
export function getPostById(postId: string) {
  return database.ref(`/${postId}`).once('value');
}

/**
* Add new post.
*/
export function addPost(postTitle: string) {
  const newId = database.ref('/').push().key;
  const newPostObj = {...postDefault, title: postTitle };
  const newPost = PostFactory(newPostObj, newId, firebase.database.ServerValue.TIMESTAMP);

  return database.ref('/'+ newId).set(newPost);
}
