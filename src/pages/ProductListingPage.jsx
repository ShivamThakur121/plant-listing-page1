import "./ProductListingPage.css";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CustomerReview from "../components/CustomerReview"
import PlantCard from "../components/PlantCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import ThreeDotIndicator from "../components/ThreeDotIndicator";


import topSelling from "../data/topSellingPlants.json";
import testimonials from "../data/testimonials.json";

const ProductListingPage = () => {
  return (
    <>
      <div className="hero-section"></div>
      <Navbar />
      <Hero />

      {/* body */}
     <div className="hero-section1"></div>
    
      {/* Our top selling plant */}
      <SectionTitle title="Our Top Selling Plants" />
      <div className="absolute justify-between w-[1650px] ml-[47px] top-[2794px] px-4 grid grid-cols-3 gap-10">
        {topSelling.map((p) => (
          <PlantCard key={p.id} {...p} />
        ))}
      </div>

        {/* Customer Review */}
      <CustomerReview title="Customer Review" />
      <div className="absolute justify-between w-[1650px] top-[4924px] ml-[47px] px-4 grid grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>
        
        {/* best o2 */}
      <div className="flex flex-col justify-between items-center absolute w-[1678px] h-[1099px] top-[5637px] left-[10px]">
        <h1 className="w-[313px] h-[67px] top-0 text-white font-semibold text-[55px]">Our best o2</h1>
        <div className="w-[1600px] h-[755px] ml-[78px]  rounded-[92px] cursor-pointer border-[2px]  hover:border-blue-700 bg-white/10 backdrop-blur-sm">
          <div className="flex flex-col ml-[808px] mt-[135px]">
            <h1 className="w-[739px] h-[92px] text-white text-[38px] font-semibold">We Have Small And Best O2 Plants Collection’s</h1>
            <p className="w-[748px] h-[136px] text-white text-[28px] font-semibold mt-[42px] leading-none">Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
            <p className="w-[748px] h-[136px] text-white mt-[42px] text-[28px] leading-none">Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
            <div className="flex justify-between h-[64px]">
              <button className="w-[217px] h-[64px] rounded-[12px] text-[28px] text-white cursor-pointer border-[2px]  hover:border-blue-700">Explore</button>
              <div className="flex mr-[91px] mt-[20px]">
                <img src="/assets/arrow.png" className="w-[24px] h-[24px] transform rotate-180 opacity-25" alt="arrow"  />
                <p className="text-white ml-[67px]">01/04</p>
                <img src="/assets/arrow.png" className="w-[24px] h-[24px] ml-[67px]" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/Aglaonema.png" className="absolute bg-cover w-[877px] h-[877px] bottom-0 left-[10px]" alt="flower1" />
      </div>

      <ThreeDotIndicator/>
      <Footer />
    </>
  );
};

export default ProductListingPage;
