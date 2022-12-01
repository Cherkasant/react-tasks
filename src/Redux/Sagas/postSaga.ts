import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  getPosts,
  getSinglePost,
  setPosts,
  setSinglePost,
} from "../Reducers/postsReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import API from "../utils/api";

function* getPostsWorker(action: PayloadAction<undefined>) {
  const { ok, data, problem } = yield call(API.getAllPosts);
  if (ok && data) {
    yield put(setPosts(data.results));
  } else {
    console.warn("Error fetching posts: ", problem);
  }
}

export default function* postSagaWatcher() {
  yield all([takeLatest(getPosts, getPostsWorker)]);
}
