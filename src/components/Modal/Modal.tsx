import React, { FC } from "react";
import ReactModal, { Props } from "react-modal";
import styles from "./Modal.module.css";
import { CloseModalICon } from "../../Assets/icons";

const Modal: FC<Props> = (props) => {
  return (
    <ReactModal
      className={styles.modal}
      overlayClassName={styles.overlay}
      {...props}
    >
      <div className={styles.block}>
        <div className={styles.icon} onClick={props.onRequestClose}>
          <CloseModalICon />
        </div>
        <div>{props.children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
