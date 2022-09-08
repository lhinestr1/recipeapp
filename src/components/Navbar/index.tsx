import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import MenuOpen from "../../assets/icons/menu-open.svg";
import MenuClose from "../../assets/icons/menu-close.svg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>
            <span className={styles.logo__text1}>
              Recipe
              <span className={styles.logo__text2}>App</span>
            </span>
          </span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.nav__item}`
                  : styles.nav__item
              }
              to="/"
            >
              Recetas
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.nav__item}`
                  : styles.nav__item
              }
              to="/trend"
            >
              Tendencias
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.active} ${styles.nav__item}`
                  : styles.nav__item
              }
              to="/products"
            >
              Productos recomendados
            </NavLink>
          </nav>
        </div>
        <div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? (
              <img
                className={styles.header__toggler__close}
                src={MenuOpen}
                alt=""
              />
            ) : (
              <img
                className={styles.header__toggler__close}
                src={MenuClose}
                alt=""
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
