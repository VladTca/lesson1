import React, {createContext, useContext, useEffect, useState} from "react";
import type {IProduct} from "../components/products/types";

interface IProductContextType {
  products: IProduct[];
  isLoading: boolean;
  error: string;
  limit: string;
  setLimit: (limit: string) => void;
  fetchProducts: () => Promise<void>;
}

export const ProductContext = createContext<IProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState("5");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
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
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider 
      value={{ 
        products, 
        isLoading, 
        error, 
        limit, 
        setLimit, 
        fetchProducts 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const contextData = useContext(ProductContext);
  if (!contextData) {
    throw new Error('ProductProvider!!!!!!!!!');
  }
  return contextData;
};