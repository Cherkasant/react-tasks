import { RootState } from "../store";

export default {
  getPost: (state: RootState) => state.postsReducer.selectedPost,
  getSelectedPostVisible: (state: RootState) =>
    state.postsReducer.isSelectedPostModalIsOpened,
  getSelectedImage: (state: RootState) => state.postsReducer.selectedImage,
  getSelectedImageVisible: (state: RootState) =>
    state.postsReducer.isSelectedImageModalIsOpened,
};
