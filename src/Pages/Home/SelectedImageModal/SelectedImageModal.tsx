import React from "react";
import { useDispatch, useSelector } from "react-redux";
import postsSelectors from "../../../Redux/Selectors/postsSelectors";
import { setSelectedImageVisible } from "../../../Redux/Reducers/postsReducer";
import Modal from "react-modal";

import styles from "./SelectedImageModal.module.css";
import { CloseModalICon } from "../../../Assets/icons";

const SelectedImageModal = () => {
  const customStyles = {
    content: {
      background: "#FFFFFF",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      paddingTop: "110px",
      paddingRight: "270px",
      paddingBottom: "160px",
      paddingLeft: "270px",
    },
    overlay: {
      backgroundColor: "rgba(38, 34, 47, 0.5)",
    },
  };

  const selectedImage = useSelector(postsSelectors.getSelectedImage);

  const isVisible = useSelector(postsSelectors.getSelectedImageVisible);

  const dispatch = useDispatch();
  const onClosed = () => {
    dispatch(setSelectedImageVisible(false));
  };

  return (
    <Modal isOpen={isVisible} onRequestClose={onClosed} style={customStyles}>
      <img src={selectedImage} alt={""} className={styles.image} />

      <div className={styles.icon} onClick={onClosed}>
        <CloseModalICon />
      </div>
    </Modal>
  );
};
export default SelectedImageModal;
