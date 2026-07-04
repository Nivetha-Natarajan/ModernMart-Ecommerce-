import React from "react";
import ProductCard from "./ProductCard";
import menProducts from "./men";

function Menpage() {
  return (
    <div>
      <h1>Men Collection</h1>
      <div className="products-grid">
        {menProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Menpage;