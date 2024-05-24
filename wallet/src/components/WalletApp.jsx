import "./WalletApp.css";
import { useState, useEffect, useCallback } from "react";

const WalletApp = () => {
  const [products, setProducts] = useState([]);
  const [highlight, setHighlight] = useState(false);

  const fetchProducts = useCallback(async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const fetchedProducts = await data.products;
    setProducts(fetchedProducts);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="wallet-container">
      <h1>Wallet Repository</h1>
      <section className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt="" className="product-image" />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <button onClick={() => setHighlight(!highlight)}>Highlight</button>
            {highlight && (
              <div>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Rating: {product.rating}</p>
                <p>Stock: {product.stock}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default WalletApp;
