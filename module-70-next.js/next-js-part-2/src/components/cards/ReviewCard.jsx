"use client"

import { useState } from "react";

const ReviewCard = ({ review }) => {
  const {
    user,
    photo,
    rating,
    review: reviewText,
    likes,
    date,
  } = review;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 space-y-3">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{user}</h3>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="text-yellow-500">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      {/* Review Text */}
      <p className="text-gray-700">{reviewText}</p>

      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 text-sm font-medium ${
          liked ? "text-red-500" : "text-gray-500"
        }`}
      >
        ❤️ {likeCount} Like
      </button>
    </div>
  );
};

export default ReviewCard;
