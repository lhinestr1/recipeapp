import React from "react";
import { Alert } from "../Alert";
import styles from "./Modal.module.scss";

interface Props {
  close: () => void;
  title: string;
  body: string;
}

const Modal: React.FC<Props> = ({ close, title, body }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => close()} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{title}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => close()}>
            X
          </button>
          <hr className={styles.separator} />
          {body ? (
            <div
              className={styles.modalContent}
              dangerouslySetInnerHTML={{ __html: body }}
            ></div>
          ) : (
            <Alert message="No hay información"></Alert>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
