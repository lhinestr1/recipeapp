import React from "react";
import { connect } from "react-redux";
import { State } from "../../store";
import CardView from "../../components/Card";
import { Recipe } from "../../services/services";
import styles from "./Recipe.module.scss";
import { useModalStatus } from "../../hooks/useModalStatus";
import Modal from "../../components/Modal";
import { Loading } from "../../components/Loading";

interface Props {
  recipes: Recipe[];
}

export const Recipes: React.FC<Props> = ({ recipes }) => {
  const { closeModal, openModal, status, ...restModal } = useModalStatus();

  return (
    <div>
      <h2 className={styles.title}>Nuevas Recetas</h2>
      {status && <Modal close={closeModal} {...restModal} />}
      <div className={styles.container}>
        {recipes.length > 0 ? (
          recipes.map((recipe: Recipe) => (
            <CardView key={recipe.id} {...recipe} openModal={openModal} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default connect((state: State) => ({
  recipes: state.recipes,
}))(Recipes);
