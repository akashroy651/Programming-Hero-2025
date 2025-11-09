import React from "react";
import { Link } from "react-router";

// letestProduct theke { product } asece
const Product = ({ product }) => {
  const { _id, title, price_min, price_max } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-4 pt-4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p> Price: ${price_min} - {price_max} </p>
          <div className="card-actions">
            <Link to={`/productDetails/${_id}`}
             className="btn btn-primary w-full">View details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
