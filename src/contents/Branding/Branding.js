import React from "react";
import { Link } from "react-router-dom";
import book from "../../images/Alchemist.jpg";
const Branding = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-3 md:grid-cols-2 items-center content-between gap-3 my-3">
        <div className="md:order-last mx-auto">
          <img src={book} className="rounded-sm p-2 bg-slate-300" alt={book} />
        </div>
        <div>
          <h1 className="text-4xl font-bold my-3 text-slate-500">
            Book That Change Your Life.
          </h1>
          <h2 className="text-3xl font-semibold my-3">
            Book That Create Your Vision.
          </h2>
          <p className="md:w-9/12 md:mx-auto my-3 text-center">
            Written by Brazilian author Paulo Coelho in 1988. It was initially
            written and published in Portuguese. It is an international
            bestseller and has been translated to more than 70 languages. The
            book is relatively short having around 167 pages only. The theme is
            about finding ones destiny or purpose in life.
          </p>
          <Link
            to="/about"
            className="bg-slate-400 py-2 px-4 inline-block mt-8 rounded-md text-slate-800 font-bold Font__QingKe"
          >
            Learn Alchemist
          </Link>
        </div>
      </div>
    </>
  );
};

export default Branding;
