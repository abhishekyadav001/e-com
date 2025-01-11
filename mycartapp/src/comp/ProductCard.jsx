import React from "react";

const ProductCard = () => {
  return (
    <div className="center">
      <div>
        <image src="https://imgur.com/6wkyyIN" />
        <p>+</p>
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          Badge
        </span>
      </div>
      <div>
        <p>title</p>
        <h5>price</h5>
      </div>
    </div>
  );
};

export default ProductCard;
