const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-300"></div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-24 bg-gray-300 rounded"></div>

        <div className="flex gap-3 mt-4">
          <div className="h-10 flex-1 bg-gray-300 rounded-lg"></div>
          <div className="h-10 flex-1 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
