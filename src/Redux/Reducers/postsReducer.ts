import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CardListType,
  CardType,
  LikeStatus,
  SetLikeStatusPayload,
} from "../../Constants/@types";
import { GetPostsPayload } from "../Types/posts";

type PostReducerState = {
  selectedPost: CardType | null;
  isSelectedPostModalIsOpened: boolean;
  selectedImage: string;
  isSelectedImageModalIsOpened: boolean;
  likedPosts: CardListType;
  dislikedPosts: CardListType;
  savedPosts: CardListType;
  allPosts: CardListType;
  singePost: CardType | null;
  isPostLoading: boolean;
  isSinglePostLoading: boolean;
  myPosts: CardListType;
  isMyPostLoading: boolean;
  totalCount: number;
};

const initialState: PostReducerState = {
  selectedPost: null,
  isSelectedPostModalIsOpened: false,
  selectedImage: "",
  isSelectedImageModalIsOpened: false,
  likedPosts: [],
  dislikedPosts: [],
  savedPosts: [],
  allPosts: [],
  singePost: null,
  isPostLoading: false,
  isSinglePostLoading: false,
  isMyPostLoading: false,
  myPosts: [],
  totalCount: 0,
};

const postsSlice = createSlice({
  name: "postsReducer",
  initialState,
  reducers: {
    setSelectedPosts: (state, action: PayloadAction<CardType | null>) => {
      state.selectedPost = action.payload;
      state.isSelectedPostModalIsOpened = true;
    },
    setSelectedPostVisible: (state, action: PayloadAction<boolean>) => {
      state.isSelectedPostModalIsOpened = action.payload;
      if (!action.payload) {
        state.selectedPost = null;
      }
    },
    setSelectedImage: (state, action: PayloadAction<string>) => {
      state.selectedImage = action.payload;
      state.isSelectedImageModalIsOpened = true;
    },
    setSelectedImageVisible: (state, action: PayloadAction<boolean>) => {
      state.isSelectedImageModalIsOpened = action.payload;
      if (!action.payload) {
        state.selectedImage = "";
      }
    },
    setLikedStatus: (state, action: PayloadAction<SetLikeStatusPayload>) => {
      const { card, likeStatus } = action.payload;
      const isLike = likeStatus === LikeStatus.Like;
      const dislikedIndex = state.dislikedPosts.findIndex(
        (post) => post.id === card.id
      );
      const likedIndex = state.likedPosts.findIndex(
        (post) => post.id === card.id
      );

      const mainArrayKey = isLike ? "likedPosts" : "dislikedPosts";
      const secondaryArrayKey = isLike ? "dislikedPosts" : "likedPosts";
      const mainIndex = isLike ? likedIndex : dislikedIndex;
      const secondaryIndex = isLike ? dislikedIndex : likedIndex;

      if (mainIndex === -1) {
        state[mainArrayKey].push(card);
      } else {
        state[mainArrayKey].splice(mainIndex, 1);
      }
      if (secondaryIndex > -1) {
        state[secondaryArrayKey].splice(secondaryIndex, 1);
      }
    },
    setSavedPosts: (state, action: PayloadAction<CardType>) => {
      const { ...card } = action.payload;
      const savedPostsIndex = state.savedPosts.findIndex(
        (post) => post.id === card.id
      );
      savedPostsIndex === -1
        ? state.savedPosts.push(card)
        : state.savedPosts.splice(savedPostsIndex, 1);
    },
    getPosts: (state, action: PayloadAction<GetPostsPayload>) => {},
    setPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostLoading = action.payload;
    },
    setPosts: (state, action: PayloadAction<CardListType>) => {
      state.allPosts = action.payload;
    },
    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
      state.isSinglePostLoading = action.payload;
    },
    setSinglePost: (state, action: PayloadAction<CardType>) => {
      state.singePost = action.payload;
    },
    getMyPosts: (state, action: PayloadAction<undefined>) => {},
    setMyPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isMyPostLoading = action.payload;
    },
    setMyPosts: (state, action: PayloadAction<CardListType>) => {
      state.myPosts = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
  },
});

export const {
  setSelectedPosts,
  setSelectedPostVisible,
  setSelectedImage,
  setSelectedImageVisible,
  setLikedStatus,
  setSavedPosts,
  getPosts,
  setPosts,
  getSinglePost,
  setSinglePost,
  setPostsLoading,
  setSinglePostLoading,
  getMyPosts,
  setMyPostsLoading,
  setMyPosts,
  setTotalCount,
} = postsSlice.actions;
const postsReducer = postsSlice.reducer;
export default postsReducer;
