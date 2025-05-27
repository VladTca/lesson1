import {Link} from "react-router-dom";
import styles from './ProductCard.module.css';
import type {JSX} from 'react';
import React from "react";
import MyButton from "../myButton/MyButton";
import {useCart} from "../../context/CartContext";

interface IProductCardProps {
  id: number,
  title: string,
  price: number,
  image: string,
}

export default function ProductCard({ id, title, price, image }: IProductCardProps): JSX.Element {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation from Link
    addToCart({
      id,
      title,
      price: price,
      quantity: 1
    });
  };

  return (
      <Link to={String(id)}>
        <div className={styles.shopContainerCard}>
          <h4>{title.length < 20 ? title : title.slice(0, 20) + '...'}</h4>
          <p>Price: {price}€</p>
          <div>
            <img src={image} alt="product-img" />
          </div>
          <article>
            <MyButton text="to product" />
            <MyButton variant="success" text="add to cart" func={handleAddToCart} />
          </article>
        </div>
      </Link>
  );
}
