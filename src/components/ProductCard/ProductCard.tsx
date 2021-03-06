import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { add } from '../../store/reducers/cartReducer';
import { getProductById } from '../../data/ProductsData';
import styles from './ProductCard.module.scss';

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  imgSrc: string;
  count: number;
}

const ProductCard:FC<ProductCardProps> = ({
  id, imgSrc, price, title, count,
}) => {
  const [productCount, setProductCount] = useState(count);
  const language = useSelector((state: RootState) => state.language.language);
  const dispatch = useDispatch<AppDispatch>();

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
        {language === 'LV' ? `Cena: ${price}` : `Price: ${price}`}
      </p>
      <div
        className={styles.row}
      >
        <div
          className={styles.container}
        >
          <button
            className={`${styles.btn} ${styles.btnCount}`}
            onClick={() => setProductCount(productCount - 1)}
            disabled={productCount === 0}
          >
            -
          </button>
          <div
            className={styles.count}
          >
            {productCount}
          </div>
          <button
            className={`${styles.btn} ${styles.btnCount}`}
            onClick={() => setProductCount(productCount + 1)}
          >
            +
          </button>
        </div>
        <button
          className={styles.btn}
          onClick={() => {
            const thisProduct = getProductById(id);
            if (thisProduct) {
              dispatch(add({ ...thisProduct, count: productCount }));
              setProductCount(0);
            }
          }}
          disabled={productCount === 0}
        >
          {language === 'LV' ? 'Pievienot grozam' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
