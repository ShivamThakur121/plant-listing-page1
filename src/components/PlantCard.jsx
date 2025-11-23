const PlantCard = ({ name, image, price, discription}) => {
  return (
    <div className="relative flex">
      <div className="flex flex-col justify-center p-4 md:w-[450px] md:h-[660px] lg:w-[512px] lg:h-[757px] mt-[113px] rounded-[77px] bg-white/10 backdrop-blur-sm cursor-pointer border-[2px] hover:border-blue-700 z-0">
        <h3 className="mt-[361px] ml-[25px] text-[38px] md:text-[30px] font-semibold text-white leading-0">{name}</h3>
        <p className="flex ml-[25px] text-[24px] md:text-[20px] text-white opacity-75">{discription}</p>
        <div className="flex justify-between mr-[25px] ml-[25px] mb-[55px]">
          <p className="text-white text-[38px] font-bold">{price}</p>
          <div className="flex justify-center items-center w-[55px] h-[55px] border-white border-[2px] rounded-xl">
            <img src="/assets/bag.png" className="w-[27px] h-[27px]" alt="bag"/>
          </div>
        </div>
      </div>
      <img src={image} alt={name} className="absolute w-[459px] h-[459px] top-0 z-10"/>
    </div>
  );
};

export default PlantCard;
