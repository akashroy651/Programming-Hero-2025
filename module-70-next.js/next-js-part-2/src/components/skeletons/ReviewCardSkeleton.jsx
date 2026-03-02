const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 animate-pulse space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="h-4 w-24 bg-gray-300 rounded"></div>

      <div className="space-y-2">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>

      <div className="h-4 w-20 bg-gray-300 rounded"></div>
    </div>
  );
};

export default ReviewCardSkeleton;
