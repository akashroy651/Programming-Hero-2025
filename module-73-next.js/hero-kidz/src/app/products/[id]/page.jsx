import { getSingleProduct } from "@/actions/server/product";
import CartButton from "@/components/buttons/CartButton";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";


const ProductDetails =async ({params }) => {
    const { id } = await params;
    const product = await getSingleProduct(id);
    console.log('pro ro', product)


  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountedPrice = price - Math.round((price * discount) / 100);

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="relative h-96 w-full rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500">{bangla}</p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">{ratings}</span>
          <span className="text-gray-400">
            ({reviews} reviews · {sold} sold)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-gray-400">
              ৳{price}
            </span>
          )}
          {discount > 0 && (
            <span className="badge badge-error">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Add to cart */}
        {/* <button className="btn btn-primary gap-2">
          <FaShoppingCart />
          Add to Cart
        </button> */}

            <CartButton product={product}></CartButton>



        {/* Info */}
        <ul className="list-disc list-inside text-sm text-gray-600">
          {info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Description */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="whitespace-pre-line text-gray-700">
          {description}
        </p>

        {/* Q&A */}
        <h2 className="text-2xl font-semibold mt-6">Q & A</h2>
        <div className="space-y-3">
          {qna.map((item, index) => (
            <div key={index} className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
