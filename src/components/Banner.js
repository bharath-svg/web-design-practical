import React from "react";
import bannerImage1 from "../images/Screenshot 2022-06-22 at 7.15 1.png";
import bannerImage2 from "../images/col_4.png";
import bannerImage3 from "../images/col_6.png";
import bannerImage4 from "../images/col_7.png";
import bannerImage5 from "../images/col_5.png";

const Banner = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 lg:mt-0 md:mt-24 mt-6">
      {/* Left Side */}
      <div className="flex flex-col h-full justify-center">
        <h4 className="text-3xl Neue Haas Unica capitalize leading-loose md:text-6xl font-bold tracking-wide w-full">
          modern <br /> temp <span className="text-cyan-600">labour <br /> solutions</span>
        </h4>
        <div>
          <button className="bg-black text-white rounded border-black mr-4 hover:shadow-xl p-4 mt-12">
            Find Workers
          </button>
          <button className="bg-cyan-600 text-white rounded border-black hover:shadow-xl p-4">
            Find Jobs
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] mt-8 rounded-lg">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={bannerImage1}
          alt="/"
        />
        <img
          className="row-span-2 object-cover rounded-s-lg w-full h-full p-2"
          src={bannerImage2}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full rounded-s-lg p-2"
          src={bannerImage3}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={bannerImage4}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={bannerImage5}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Banner;
