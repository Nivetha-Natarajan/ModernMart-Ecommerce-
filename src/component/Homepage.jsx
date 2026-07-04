import React from "react";
import ProductCard from "./ProductCard";
import homeProducts from "./home";

function Home() {
  return (
    <div>
      <h1>Home Products</h1>

      <div className="products-grid">
        {homeProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;