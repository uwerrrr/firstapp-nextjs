import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div>
      <p> Product Card Component: </p>
      <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductCard;
