import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../../hooks/useReview";
import SortReview from "./SortReview";

const CustomerReview = () => {
  const navigate = useNavigate([]);

  const [reviews, setreviews] = useReview();

  const result = reviews.filter((elem, index) => index < 3);
  return (
    <div className="my-10 md:container mx-auto">
      <h1 className="text-2xl font-semibold bg-slate-100 inline-block px-3 py-1 rounded-md my-3">
        customer review ({result ? result.length : "Data Not Found"})
      </h1>
      {result ? (
        <div className="grid md:grid-cols-3 gap-3 md:my-6">
          {result.map((reviewer) => (
            <SortReview key={reviewer.id} reviewer={reviewer}></SortReview>
          ))}
        </div>
      ) : (
        "Data Not Found"
      )}
      <button
        className="bg-slate-400 px-3 py-1 rounded-md font-bold Font__Lobster mt-6"
        onClick={() => navigate("/reviews")}
      >
        See All Review
      </button>
    </div>
  );
};

export default CustomerReview;
