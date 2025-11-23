import React from "react";

const Hero = () =>(
    <>
      <div className="absolute w-[802px] h-[280px] top-[252px] left-[39px] cursor-pointer border border-transparent hover:border-blue-700 rounded-xl">
        <h1 className="text-white text-9xl font-semibold">Earth’s Exhale</h1>

        <p className="text-white text-base mt-1">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>

        <div className="flex mt-6">
          <button className="w-[217px] h-[64px] top-[466px] left-[39px] text-2xl text-white border-[2px] rounded-[12px]">Buy Now</button>
          <button className="w-[70px] left-[277px] top-[462px] h-[70px] text-white border-[2px] border-white rounded-full ml-4">▶</button>
          <p className="text-white m-[22px]">Live Demo</p>
        </div>
      </div>

      <div className="w-[512px] h-[644px] absolute top-[194px] left-[1164px] bg-white/10 backdrop-blur-sm cursor-pointer border-[1px] hover:border-blue-700 rounded-[51px]">
        <div className="ml-20 flex flex-col mt-[386px] text-white">
          <p className="w-[132px] h-28px] text-sm">indoor Plant</p>
          <div className="flex justify-between mr-[30px]">
            <p className="text-[38px]">Aglaonema plant</p>
            <img src="/assets/arrow.png" className="w-[20px] h-[20px] mt-4" alt="arrow" />
          </div>
          <button className="w-[217px] h-[64px] top-[674px] left-[1245px] rounded-[12px] border-[2px] text-2xl">Buy Now</button>
        </div>
      </div>
      <img src="/assets/Aglaonema.png" className="absolute w-[459px] h-459px] top-[119px] left-[1198px]" alt="flower2"></img>

      <div className="absolute w-[409px] h-[237px] top-[705px] left-[43px] bg-white/10 backdrop-blur-sm cursor-pointer border-[1px] hover:border-blue-700 rounded-[51px]">
        <div className="flex m-5 p-2 w-[233px] h-[64px]">
          <img src="/assets/profile3.png" className="w-[64px] h-[64px] top-[742px] left-[70px] rounded-[86px]" alt="profile3" />
          <div className="w-[141px] h-[47px] top-[751px] left-[162px] ml-2">
            <h1 className="text-white w-[141px] h-[27px] ml-4">Ronnie Hamill</h1>
            <span className="text-yellow-400 font-bold ml-3">&#9733;</span>
            <span className="text-yellow-400 font-bold ml-2">&#9733;</span>
            <span className="text-yellow-400 font-bold ml-2">&#9733;</span>
            <span className="text-yellow-400 font-bold ml-2">&#9733;</span>
            <span className="text-yellow-400 font-bold ml-2">&#9733;</span>
          </div>

        </div>
        <p className="text-white w-[341px] h-[63px] opacity-75 ml-5 p-2">I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
      </div>

      {/* our treanding plant */}
      <div className="absolute w-[476px] h-[67px] top-[1025px] left-[626px] cursor-pointer border-[1px] border-transparent hover:border-blue-700">
        <p className="flex text-white text-[55px] font-semibold">Our Trendy plants</p>
      </div>

      {/* 4 */}
      <div className="absolute flex w-[1619px] h-[526px] top-[1171px] left-[54px] rounded-[151px] cursor-pointer border-[2px] hover:border-blue-700 bg-white/10 backdrop-blur-sm">
        <div className="flex flex-col ml-[896px] mt-[123px]">
          <h1 className="text-white w-[508px] h-[46px] text-4xl font-semibold">For Your Desks Decorations</h1>
          <p className="text-white mt-4">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
          <p className="text-white w-[171px] h-[46px] text-2xl mt-3">Rs. 599/-</p>
          <div className="flex flex-row mt-2">
            <button className="text-xl text-white w-[217px] h-[64px] cursor-pointer border-[2px]  hover:border-blue-700 rounded-[28px]">Explore</button>
            <div className="flex justify-center items-center w-[64px] h-[64px] cursor-pointer border-[2px]  hover:border-blue-700 rounded-[12px] ml-5">
              <img src="/assets/bag.png" className="w-[34px] h-[34px]" alt="bag" />
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/Plantain.png" className="absolute w-[601px] h-[732px] top-[965px] left-[126px]" alt="Plantain" />

      {/* 5 */}
      <div className="absolute w-[1619px] h-[526px] top-[1824px] left-[54px] rounded-[151px] cursor-pointer border-[2px] hover:border-blue-700 bg-white/10 backdrop-blur-sm">
        <div className="flex flex-col mt-[120px] ml-[72px]">
          <h1 className="text-white text-[38px] h-[46px] font-semibold">For Your Desks Decorations</h1>
          <p className="flex w-[732px] h-[48px] text-white text-[20px] font-semibold mt-5">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
          <p className="text-white h-[46px] font-semibold text-[38px] mt-3">Rs. 399/-</p>
          <div className="flex flex-row mt-4">
            <button className="w-[217px] h-[64px] text-white text-[38px] cursor-pointer border-[2px]  hover:border-blue-700 rounded-[12px]">Explore</button>
            <div className="flex items-center justify-center w-[64px] h-[64px] top-[2166px] left-[375px] cursor-pointer border-[2px]  hover:border-blue-700 rounded-[12px] ml-5">
              <img src="assets/bag.png" className="w-[34px] h-[34px]" alt="bag" />
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/flower3.png" className="absolute w-[732px] h-[732px] top-[1674px] left-[971px]" alt="flower5" />
    </>
);

export default Hero;
