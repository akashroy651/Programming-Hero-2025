const Loading = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="h-80 bg-gray-300 rounded-xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-6 w-40 bg-gray-300 rounded"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>

          <div className="flex gap-4 mt-6">
            <div className="h-12 w-36 bg-gray-300 rounded-lg"></div>
            <div className="h-12 w-36 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

