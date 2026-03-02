const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 animate-pulse">
      {/* Image */}
      <div className="skeleton h-96 w-full"></div>

      {/* Right */}
      <div className="space-y-4">
        <div className="skeleton h-6 w-3/4"></div>
        <div className="skeleton h-4 w-1/2"></div>

        <div className="skeleton h-4 w-32"></div>

        <div className="flex gap-3">
          <div className="skeleton h-8 w-32"></div>
          <div className="skeleton h-6 w-20"></div>
        </div>

        <div className="skeleton h-10 w-40"></div>

        <div className="space-y-2">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-5/6"></div>
          <div className="skeleton h-4 w-4/6"></div>
        </div>
      </div>

      {/* Description */}
      <div className="md:col-span-2 space-y-3">
        <div className="skeleton h-6 w-40"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/6"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
