"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const CardButton = ({food}) => {

    const [inCart, setIncart] = useState(false);
    const {addToCart } = use(CartContext);

    const handleadd2Cart = () => {
        addToCart(food)
        setIncart(true)

    }
    return (
        <button
        onClick={handleadd2Cart}
        disabled={inCart}
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition disabled:bg-gray-100 disabled:text-gray-600"
          >
            {
                inCart ? "Added" : "Add to Cart"
            }
            
          </button>
    );
};

export default CardButton;