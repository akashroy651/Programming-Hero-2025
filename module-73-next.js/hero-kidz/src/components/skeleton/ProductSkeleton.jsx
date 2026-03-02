import React from 'react';

const ProductSkeleton = () => {
    return (
         <div className="card bg-base-100 shadow-md">
      {/* Image Skeleton */}
      <div className="skeleton h-52 w-full"></div>

      <div className="card-body p-4 space-y-3">
        {/* Title */}
        <div className="skeleton h-4 w-3/4"></div>

        {/* Rating */}
        <div className="flex gap-2">
          <div className="skeleton h-4 w-10"></div>
          <div className="skeleton h-4 w-20"></div>
        </div>

        {/* Sold */}
        <div className="skeleton h-4 w-24"></div>

        {/* Price & Button */}
        <div className="flex justify-between items-center">
          <div className="skeleton h-6 w-20"></div>
          <div className="skeleton h-8 w-20"></div>
        </div>
      </div>
    </div>
    );
};

export default ProductSkeleton;