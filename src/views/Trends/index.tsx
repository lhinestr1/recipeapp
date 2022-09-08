import React from "react";
import { connect } from "react-redux";
import { State } from "../../store";
import CardView from "../../components/Card";
import { Recipe as TrendInterface } from "../../services/services";
import styles from "./Trend.module.scss";
import Modal from "../../components/Modal";
import { useModalStatus } from "../../hooks/useModalStatus";
import { Loading } from "../../components/Loading";

interface Props {
  trends: TrendInterface[];
}

export const Trend: React.FC<Props> = ({ trends }) => {
  const { closeModal, openModal, status, ...restModal } = useModalStatus();

  return (
    <div>
      <h2 className={styles.title}>Tendencias</h2>
      {status && <Modal close={closeModal} {...restModal} />}
      <div className={styles.container}>
        {trends.length > 0 ? (
          trends.map((trend: TrendInterface) => (
            <CardView key={trend.id} {...trend} openModal={openModal} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default connect((state: State) => ({
  trends: state.trend,
}))(Trend);
