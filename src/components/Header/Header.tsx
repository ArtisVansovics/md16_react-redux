import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { toEnglish, toLatvian } from '../../store/reducers/languageReducer';
import styles from './Header.module.scss';
import logo from '../../assets/images/logoShop.png';

const Header = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <div className={styles.box}>
        <select>
          <option
            value="EN"
            onClick={() => dispatch(toEnglish())}
          >
            EN
          </option>
          <option
            value="LV"
            onClick={() => dispatch(toLatvian())}
          >
            LV
          </option>
        </select>
        <NavLink
          className={styles.link}
          to="/cart"
        >
          {cart.length !== 0 && (
            <div className={styles.counter}>
              {cart.length}
            </div>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`bi bi-cart4 ${styles.cart}`}
            viewBox="0 0 16 16"
          >
            <path
              // eslint-disable-next-line max-len
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
            />
          </svg>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
