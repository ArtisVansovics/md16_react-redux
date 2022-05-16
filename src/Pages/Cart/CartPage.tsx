import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartCard from '../../components/CartCard/CartCard';
import Button from '../../components/Button/Button';

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.value);

  const total = cart
    .map(({ price, count }) => price * count)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <h1>Your Cart</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              {cart.map(({
                id, imgSrc, price, title, count,
              }) => (
                <CartCard
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  imgSrc={imgSrc}
                  count={count}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <h2 className="page__sub-title">
                {`Total: $${total}`}
              </h2>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="box">
              <Button title="Purchase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
