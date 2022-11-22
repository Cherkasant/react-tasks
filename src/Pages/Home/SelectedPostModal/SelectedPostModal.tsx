import React from "react";
import Modal from "../../../components/Modal";
import Card from "../../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import postsSelectors from "../../../Redux/Selectors/postsSelectors";
import { CardSize } from "../../../components/Card/Card";
import { setSelectedPostVisible } from "../../../Redux/Reducers/postsReducer";
import styles from "./SelectedPostModal.module.css";

const SelectedPostModal = () => {
  const selectedPost = useSelector(postsSelectors.getPost);

  const isVisible = useSelector(postsSelectors.getSelectedPostVisible);

  const dispatch = useDispatch();
  const onClosed = () => {
    dispatch(setSelectedPostVisible(false));
  };

  return (
    selectedPost && (
      <Modal isOpen={isVisible} onRequestClose={onClosed}>
        <div className={styles.postContent}>
          <Card isFromModal size={CardSize.Large} card={selectedPost} />
        </div>
      </Modal>
    )
  );
};
export default SelectedPostModal;
