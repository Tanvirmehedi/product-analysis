import { MenuIcon, XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-300 ">
      <nav className="flex justify-between items-center  py-3   md:container md:mx-auto">
        <div className="logo pl-3">
          <div className="Font__Glitch text-2xl md:text-3xl ">
            The Alchemist
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="menu-icon mr-3 w-6 h-6 md:hidden cursor-pointer"
        >
          {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
        <ul
          className={`md:relative md:top-0 md:flex md:justify-around md:items-center ${
            open
              ? "top-14 absolute w-full bg-slate-300 py-3 transition-all"
              : "top-[-320px] absolute "
          }`}
        >
          <CustomLink className="link" to="/">
            Home
          </CustomLink>
          <CustomLink className="link" to="/reviews">
            Reviews
          </CustomLink>
          <CustomLink className="link" to="/dashboard">
            Dashboard
          </CustomLink>
          <CustomLink className="link" to="/blogs">
            Blogs
          </CustomLink>
          <CustomLink className="link" to="/about">
            About
          </CustomLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
