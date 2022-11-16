import React from "react";
import Modal from "react-modal";
import Card from "../../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import postsSelectors from "../../../Redux/Selectors/postsSelectors";
import { CardSize } from "../../../components/Card/Card";
import { setSelectedPostVisible } from "../../../Redux/Reducers/postsReducer";
import { CloseModalICon } from "../../../Assets/icons";
import styles from "./SelectedPostModal.module.css";

const SelectedPostModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      paddingTop: "83px",
      paddingRight: "77px",
      paddingBottom: "54px",
      paddingLeft: "73px",
    },
    overlay: {
      backgroundColor: "rgba(38, 34, 47, 0.5)",
    },
  };

  const selectedPost = useSelector(postsSelectors.getPost);

  const isVisible = useSelector(postsSelectors.getSelectedPostVisible);

  const dispatch = useDispatch();
  const onClosed = () => {
    dispatch(setSelectedPostVisible(false));
  };

  return (
    selectedPost && (
      <Modal isOpen={isVisible} onRequestClose={onClosed} style={customStyles}>
        <Card size={CardSize.Large} card={selectedPost} />
        <div className={styles.icon} onClick={onClosed}>
          <CloseModalICon />
        </div>
      </Modal>
    )
  );
};
export default SelectedPostModal;
