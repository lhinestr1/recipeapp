import React from "react";
import styles from "./Head.module.scss";

const Head: React.FC = () => {
  return (
    <div className={styles.head}>
      <div className={styles.head__img}></div>
    </div>
  );
};

export default Head;
