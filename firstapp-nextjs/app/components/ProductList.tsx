import { Product } from "@/interfaces";
import React from "react";

const ProductList = async () => {
  // GET request
  const res = await fetch(
    "https://65fa6ab13909a9a65b1a5bee.mockapi.io/products",
    {
      // cache: "no-cache",
      next: {
        tags: ["products"], // add tag "products" to this fetch
      },
    }
  );

  const products: Product[] = await res.json();

  return (
    <div>
      <h2 className="font-bold p-5">List of Products</h2>
      <div className="min-h-50 flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
