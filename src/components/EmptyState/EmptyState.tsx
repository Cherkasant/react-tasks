import React from "react";
import styles from "./EmptyState.module.css";
import { TbFaceIdError } from "react-icons/tb";
const EmptyState = () => {
  return (
    <div className={styles.container}>
      <TbFaceIdError className={styles.icon} />
      <div className={styles.title}>Files not found</div>
      <div className={styles.description}>Error 404</div>
    </div>
  );
};

export default EmptyState;
