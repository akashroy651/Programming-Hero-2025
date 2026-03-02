import ProductDetails from "@/app/products/[id]/page";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";




const ProductCard = ({ product }) => {


  

    if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <p className="text-center text-gray-500">
          Product not found
        </p>
      </div>
    );
  }


  const {
    title,
    image,
    price,
    ratings,
    reviews,
    sold,
    _id
  } = product;
// console.log('ydusvuc', product)

  // slug বানানো
  // const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      {/* Image */}
      <figure className="relative h-52">
        <Image
        width={200}
        height={180}
          src={image}
          alt={title}
          // fill
          className="object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-base line-clamp-2">
          {title}
        </h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">{ratings}</span>
          <span className="text-gray-400">
            ({reviews} reviews)
          </span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">
          Sold: {sold}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-xl font-bold text-primary">
            ৳{price}
          </p>

          <button className="btn btn-primary btn-sm">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
        
       {/* ✅ View Details */}
       <Link href={`/products/${_id}`}>
  <button className="btn btn-primary btn-outline btn-sm mt-2 w-full">
    View Details
  </button>
</Link>

      </div>
    </div>
  );
};

export default ProductCard;
