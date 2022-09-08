import React from "react";
import Styles from "./Alert.module.scss";

interface Props {
  message: string;
}

export const Alert: React.FC<Props> = ({ message }) => {
  return <div className={Styles.alert}>{message}</div>;
};
