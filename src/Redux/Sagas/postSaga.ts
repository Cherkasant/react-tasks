import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  getMyPosts,
  getPosts,
  getSinglePost,
  setMyPosts,
  setMyPostsLoading,
  setPosts,
  setPostsLoading,
  setSinglePost,
  setSinglePostLoading,
} from "../Reducers/postsReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import API from "../utils/api";
import callCheckingAuth from "./callCheckingAuth";

function* getPostsWorker() {
  yield put(setPostsLoading(true));
  const { ok, data, problem } = yield call(API.getAllPosts);
  if (ok && data) {
    yield put(setPosts(data.results));
  } else {
    console.warn("Error fetching posts: ", problem);
  }
  yield put(setPostsLoading(false));
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { ok, data, problem } = yield call(API.getSinglePost, action.payload);
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error fetching single post: ", problem);
  }
  yield put(setSinglePostLoading(false));
}

function* getMyPostsWorker() {
  yield put(setMyPostsLoading(true));
  const { ok, data, problem, status } = yield callCheckingAuth(API.getMyPosts);
  if (ok && data) {
    yield put(setMyPosts(data));
  } else if (status === 404) {
    yield put(setMyPosts([]));
  } else {
    console.warn("Error fetching my posts: ", problem);
  }
  yield put(setMyPostsLoading(false));
}

export default function* postSagaWatcher() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(getMyPosts, getMyPostsWorker),
  ]);
}
