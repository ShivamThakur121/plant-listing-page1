const Footer = () => {
  return (
    <footer className="absolute w-[1678px] h-full top-[7140px] left-[85px] text-white md:px-20 lg:px-32">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">

        {/* LEFT*/}
        <div className="md:w-1/3 mb-10 md:mb-0">
          <div className="w-[378px] flex items-center gap-3">
            <img src="/assets/plant-logo.png" alt="Logo" className="w-[94px] h-[94px]" />
            <h2 className="text-[45px] font-semibold">FloraVision.</h2>
          </div>
          <p className="flex mt-5 text-[28px] leading-[24px] opacity-80">"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
        </div>

        {/* MIDDLE*/}
        <div className="md:w-1/3 mb-10 md:mb-0">
          <h3 className="text-[28px] font-semibold mb-[46px]">Quick Link's</h3>

          <ul className="flex flex-col gap-2 text-[16px] underline underline-offset-2">
            <li className="cursor-pointer w-[68px] h-[29px] text-[24px]">Home</li>
            <li className="cursor-pointer flex h-[29px] text-[24px]">Type's Of plant's</li>
            <li className="cursor-pointer flex text-[24px]">Contact</li>
            <li className="cursor-pointer flex text-[24px]">Privacy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/3">
          <h3 className="text-[28px] font-semibold mb-4">For Every Update.</h3>

          <div className="flex w-[562px] h-[74px] items-center border border-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent text-white text-[24px] px-3 w-full h-full focus:outline-none"
            />
            <button className="bg-white w-[165.08px] h-[64.89px] text-black font-semibold px-3 py-1 mr-1 rounded-md border-2 border-[#FF3DB4] hover:opacity-90">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between">
        <div className="flex mt-12 w-[230px] h-[34px] gap-10 text-[28px] font-semibold tracking-wide">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
        </div>
        <p className="text-center mt-12 text-[24px] opacity-80">FloraVision © all right reserve</p>
      </div>
    </footer>
  );
};

export default Footer;

