import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-[0px] flex flex-col w-[1728px] sm:flex-row items-center justify-between p-5 shadow">
      <h1 className="text-2xl text-white font-bold">FloraVision.</h1>
      <div className="m-2 flex flex-col sm:flex-row">
        <a href="#" className="m-2 text-white">Home</a>
        <a href="#" className="m-2 text-white">Plants Type</a>
        <a href="#" className="m-2 text-white">More</a>
        <a href="#" className="m-2 text-white">Contact</a>
      </div>

      <div className="flex flex-row items-center space-x-4">
        <img src="/assets/search.png" className="opacity-75 w-6 h-6" alt="search"></img>
        <img src="/assets/bag.png" className="opacity-75 sm:ml-2 w-6 h-6" alt="bag"></img>
        <a href="#" className="opacity-75 m-2 w-6 h-6">
          <img src="/assets/Line1.png" className="w-6 h-0.5 m-1" alt="imageNav1" />
          <img src="/assets/Line2.png" className="w-4 h-0.5 m-1.5" alt="imageNav2" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
