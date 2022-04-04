import React from "react";
import useReview from "../../hooks/useReview";
import DisplayReview from "./DisplayReview";

const Review = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="md:container mx-auto mt-3">
      <h1>Total Data Found: {reviews.length}</h1>
      <div className="grid md:grid-cols-3 gap-4 content-center mt-3">
        {reviews.map((review) => (
          <DisplayReview key={review.id} review={review}></DisplayReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
