import React from "react";

const DisplayReview = ({ review }) => {
  const { name, rating, picture, city, description } = review;
  return (
    <div className="border-4 px-3 py-2 mx-2">
      <img src={picture} alt={name} className="border-2 mx-auto rounded-full" />
      <div className="text my-3 border-2 border-t-0 rounded-t-none p-2 grid grid-rows-1 gap-3 rounded-lg bg-gray-100">
        <h3>Name : {name}</h3>
        <div>
          <span className="bg-slate-500 p-1 rounded-md text-slate-200">
            {" "}
            City of Reviewer: {city}
          </span>
          <span className="mx-2 bg-slate-500 p-1 rounded-md text-slate-200">
            Rating : {rating}
          </span>
        </div>
        <p className="text-justify text-slate-600">
          <span className="text-orange-300 bg-slate-500 p-1 rounded-md mx-3 font-bold">
            Read Reviewer Mind:
          </span>
          {description}
        </p>
      </div>
    </div>
  );
};

export default DisplayReview;
