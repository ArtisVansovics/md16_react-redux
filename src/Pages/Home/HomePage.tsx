import React, { useEffect, useState } from 'react';
import { Product } from '../../models/ProductModel';
import { getProducts } from '../../data/ProductsData';
import ProductCard from '../../components/ProductCard/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  console.log(products);

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="grid-container">
                {products.map(({
                  id, imgSrc, price, title, count,
                }) => (
                  <ProductCard
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
