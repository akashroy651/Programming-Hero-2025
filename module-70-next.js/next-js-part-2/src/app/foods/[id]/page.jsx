import Image from "next/image";
import Link from "next/link";


export function generateStaticParams() {
  return [{ id: '52949' }, { id: '53079' }, { id: '52858' }]
}



const getSingleFood = async (id) => {
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
   
  );



  const data = await res.json();
  // console.log('ggggg', data)
  return data.details;
};

const Page = async ({ params }) => {
  const { id } =await params;
  const food = await getSingleFood(id);
// console.log('ki ki ', food)
  if (!food) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">
          Food not found ❌
        </h2>
      </div>
    );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link
        href="/foods"
        className="text-blue-500 font-semibold mb-6 inline-block"
      >
        ← Back to Foods
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={foodImg}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <span className="text-sm text-orange-500 font-semibold">
            {category}
          </span>

          <h1 className="text-4xl font-bold mt-2">{title}</h1>

          <p className="text-xl font-semibold text-gray-700 mt-4">
            Price: ৳ {price}
          </p>

          <p className="mt-2 text-gray-600">
            Area: <span className="font-semibold">{area}</span>
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>

            {video && (
              <a
                href={video}
                target="_blank"
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
