import React from "react";
import Styles from "./Loading.module.scss";

export const Loading: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
