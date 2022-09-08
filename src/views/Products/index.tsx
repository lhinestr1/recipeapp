import React from "react";
import { connect } from "react-redux";
import { State } from "../../store";
import CardView from "../../components/Card";
import { Recipe as Product } from "../../services/services";
import styles from "./Product.module.scss";
import Modal from "../../components/Modal";
import { useModalStatus } from "../../hooks/useModalStatus";
import { Loading } from "../../components/Loading";

interface Props {
  products: Product[];
}

export const Products: React.FC<Props> = ({ products }) => {
  const { closeModal, openModal, status, ...restModal } = useModalStatus();

  return (
    <div>
      <h2 className={styles.title}>Productos Recomendados</h2>
      {status && <Modal close={closeModal} {...restModal} />}
      <div className={styles.container}>
        {products.length > 0 ? (
          products.map((product: Product) => (
            <CardView key={product.id} {...product} openModal={openModal} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default connect((state: State) => ({
  products: state.products,
}))(Products);
