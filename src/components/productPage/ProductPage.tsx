import styles from './ProductPage.module.css'
import React, {type JSX, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import type {IProduct} from "../products/types";
import Loader from "../loader/Loader";

const initialState: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0
  }
};

export default function ProductPage(): JSX.Element {
  // получаем id из адресной строки
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>(initialState);

  useEffect(() => {
    // подгружаем данные по конкретному продукту
    setTimeout(()=> {
      fetch('https://fakestoreapi.com/products/' + id)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, 1500)
  }, [id]);
  return (
    <div className={styles.productContainer}>
      {product.title ? (
        <>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <div className={styles.productInfo}>
            <span className={styles.rating}>Rating: {product.rating.rate}</span>
            <span className={styles.price}>Price: {product.price}€</span>
          </div>
          <p className={styles.productDescription}>{product.description}</p>
          <img 
            src={product.image} 
            alt={product.title} 
            className={styles.productImage} 
          />
          <div>
            <Link to='/Dynamic-routing' className={styles.backLink}>
              Back to products
            </Link>
          </div>
        </>
      ) : <Loader />}
    </div>
  );
}
