
"use client"
import Link from "next/link";
import CardButton from "../buttons/CardButton";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;
// console.log('id', id)
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <img
        src={foodImg}
        alt={title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <span className="text-sm text-orange-500 font-semibold">
          {category}
        </span>

        <h2 className="text-lg font-bold text-gray-800 mt-1">
          {title}
        </h2>

        <p className="text-gray-600 mt-2 font-semibold">
          ৳ {price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          
          <CardButton food={food}></CardButton>

          <Link
           href={`/foods/${id}`}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
