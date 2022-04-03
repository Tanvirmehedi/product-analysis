import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-400 py-4 ">
        <p>
          All Right Reserved &copy;
          <span className="text-slate-300 hover:font-bold">
            <Link to="/"> The Alchemist</Link> 2022
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
