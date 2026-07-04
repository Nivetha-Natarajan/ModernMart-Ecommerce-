import React from "react";
import ProductCard from "./ProductCard";
import wemonProducts from "./wemon";

function Womenpage() {
  return (
    <div>
      <h1>Women Collection</h1>
      <div className="products-grid">
        {wemonProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
export default Womenpage;