import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postsSelectors from "../../../Redux/Selectors/postsSelectors";
import { setSelectedImageVisible } from "../../../Redux/Reducers/postsReducer";
import Modal from "../../../components/Modal";

import styles from "./SelectedImageModal.module.css";

const SelectedImageModal = () => {
  const selectedImage = useSelector(postsSelectors.getSelectedImage);

  const isVisible = useSelector(postsSelectors.getSelectedImageVisible);

  const dispatch = useDispatch();
  const onClosed = () => {
    dispatch(setSelectedImageVisible(false));
  };

  return (
    <Modal isOpen={isVisible} onRequestClose={onClosed}>
      <img src={selectedImage} alt={""} className={styles.image} />
    </Modal>
  );
};
export default SelectedImageModal;
