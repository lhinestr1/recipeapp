import React from "react";
import { Recipe } from "../services/services";
import minutes from "../assets/icons/ic_time.svg";
import favorite from "../assets/icons/ic-favorite.svg";
import styles from "./../styles/Card.module.scss";

interface Props extends Recipe {
  openModal: (title: string, body: string) => void;
}

export const Card: React.FC<Props> = ({
  image,
  sourceName,
  title,
  readyInMinutes,
  healthScore,
  openModal,
  instructions,
}) => {
  return (
    <div className={styles.card} onClick={() => openModal(title, instructions)}>
      <div className={styles.card__imagecover}>
        <img src={image} alt="img" className={styles.card__imagecover__image} />
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__footer__col}>
          <img
            src={favorite}
            alt="ico"
            className={styles.card__footer__col__img}
          />
          {healthScore}
        </div>
        <div className={styles.card__footer__col}>
          <img
            src={minutes}
            className={styles.card__footer__col__img}
            alt="ico"
          />
          {readyInMinutes} min
        </div>
      </div>
      <div className={styles.card__title}>{sourceName || title}</div>
    </div>
  );
};

export default Card;
