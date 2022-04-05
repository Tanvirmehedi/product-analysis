import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/error.png";

const NotFound = () => {
  return (
    <>
      <Link
        to="/"
        className="px-2 py-1 bg-slate-700 m-2 inline-block rounded-md font-bold text-slate-300 text-2xl"
      >
        Back To Home
      </Link>
      <div className="flex justify-center items-center h-screen">
        <img src={notFound} className="w-[80vw]" alt="Not Found" />
      </div>
    </>
  );
};

export default NotFound;
