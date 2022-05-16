import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../../models/ProductModel';
import { getProducts } from '../../data/ProductsData';
import ProductCard from '../../components/ProductCard/ProductCard';
import Button from '../../components/Button/Button';
import { RootState } from '../../store';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

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
          <div className="col-xs-12">
            <div className="box">
              <Button title={language === 'LV' ? 'Parādīt nākamās' : 'Load more'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
