import React, { FC } from 'react';
import styles from './ProductCard.module.scss';

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
  count: 0;
}

const ProductCard:FC<ProductCardProps> = ({
  id, count, imgSrc, price, title,
}) => {
  const a = 0;

  return (
    <div
      className={styles.card}
      key={id}
    >
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
      <p
        className={styles.text}
      >
        {`Price: ${price}`}
      </p>
      <div
        className={styles.row}
      >
        <div
          className={styles.container}
        >
          <button
            className={`${styles.btn} ${styles.btnCount}`}
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
          >
            +
          </button>
        </div>
        <button
          className={styles.btn}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
