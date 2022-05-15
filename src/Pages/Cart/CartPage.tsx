import React, { useEffect, useState } from 'react';
import { Product } from '../../models/ProductModel';
import { getProducts } from '../../data/ProductsData';

const CartPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  });

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
      </div>
    </div>
  );
};

export default CartPage;
