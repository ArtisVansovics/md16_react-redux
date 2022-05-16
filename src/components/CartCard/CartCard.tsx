import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import styles from './CartCard.module.scss';
import { plusOne, minusOne } from '../../store/reducers/cartReducer';

type CartCardProps = {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
  count: number;
}

const CartCard:FC<CartCardProps> = ({
  id, imgSrc, price, title, count,
}) => {
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch<AppDispatch>();

  const totalPrice = (price * count).toFixed(2);

  return (
    <div
      className={styles.card}
      key={id}
    >
      <div className={styles.row}>
        <img
          className={styles.img}
          src={imgSrc}
          alt={title}
        />
        <h3
          className={styles.title}
        >
          {title}
        </h3>
      </div>
      <div
        className={styles.box}
      >
        <p
          className={styles.text}
        >
          {language === 'LV' ? `Cena par katru: ${price}` : `Price per unit: ${price}`}
        </p>
        <div
          className={styles.container}
        >
          <p
            className={styles.text}
          >
            {language === 'LV' ? 'Daudzums:' : 'Amount:'}
          </p>
          <div
            className={styles.row}
          >
            <button
              className={`${styles.btn} ${styles.btnCount}`}
              onClick={() => dispatch(minusOne(id))}
              disabled={count === 0}
            >
              -
            </button>
            <div
              className={styles.count}
            >
              {count}
            </div>
            <button
              className={`${styles.btn} ${styles.btnCount}`}
              onClick={() => dispatch(plusOne(id))}
            >
              +
            </button>
          </div>
        </div>
        <p
          className={styles.text}
        >
          {language === 'LV' ? `Kopā: ${totalPrice}` : `Total: ${totalPrice}`}
        </p>
      </div>
    </div>
  );
};

export default CartCard;
