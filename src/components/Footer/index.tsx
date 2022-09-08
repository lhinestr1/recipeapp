import React from "react";
import Styles from "./Footer.module.scss";
import imgFooter from "../../assets/Grupo 7610.png";

export const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footer__textfooter}>
        <span>Con el Patrocinio de</span>
      </div>
      <div className={Styles.footer__imgcover}>
        <img
          src={imgFooter}
          className={Styles.footer__imgcover__img}
          alt="icono"
        />
      </div>
    </div>
  );
};
