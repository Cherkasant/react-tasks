import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../Constants/@types";

type PostReducerState = {
  selectedPost: CardType | null;
  isSelectedPostModalIsOpened: boolean;
  selectedImage: string;
  isSelectedImageModalIsOpened: boolean;
};

const initialState: PostReducerState = {
  selectedPost: null,
  isSelectedPostModalIsOpened: false,
  selectedImage: "",
  isSelectedImageModalIsOpened: false,
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
  },
});

export const {
  setSelectedPosts,
  setSelectedPostVisible,
  setSelectedImage,
  setSelectedImageVisible,
} = postsSlice.actions;
const postsReducer = postsSlice.reducer;
export default postsReducer;
