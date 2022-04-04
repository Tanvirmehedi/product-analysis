import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerReview = () => {
  const navigate = useNavigate();
  return (
    <div className="my-3">
      <h1>customer review</h1>

      <button
        className="bg-slate-400 px-3 py-1 rounded-md font-bold Font__Lobster"
        onClick={() => navigate("/reviews")}
      >
        See All Review
      </button>
    </div>
  );
};

export default CustomerReview;
