import type {JSX} from "react";
import React, {useEffect, useState} from "react";
import styles from "./Products.module.css";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";
import type {IProduct} from "./types";


export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState("5");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      const data: IProduct[] = await res.json();
      setProducts(data);
      setError("");
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const numLimit = Number(limit);
    if (isNaN(numLimit) || numLimit < 1 || numLimit > 20) {
      setError("Please enter a valid number between 1 and 20.");
      return;
    }

    setError("");
    getProducts();
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