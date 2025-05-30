import type {JSX} from "react";
import React from "react";
import styles from "./Products.module.css";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";
import {useProducts} from "../../context/ProductContext";


export default function Products(): JSX.Element {
  const { products, isLoading, error, limit, setLimit, fetchProducts } = useProducts();

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const numLimit = Number(limit);
    if (isNaN(numLimit) || numLimit < 1 || numLimit > 20) {
      return;
    }

    fetchProducts();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="limit">Number of products (1-20):</label>
          <input
            type="number"
            id="limit"
            value={limit}
            onChange={handleLimitChange}
            className={styles.input}
            min={1}
            max={20}
          />
          <button type="submit" className={styles.button}>
            Apply
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </form>

      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <div className={styles.shopContainer}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
