const TestimonialCard = ({ name, comment, rating, image }) => {
  return (
    <div className="relative flex flex-col max-h-[480px] justify-center rounded-[77px] cursor-pointer border-[2px] hover:border-blue-700">
      <div className="flex ml-[45px] mt-[98px]">
        <img src={image} alt={name} className="w-[88px] h-[88px] rounded-full object-cover"/>
        <div className="flex flex-col ml-[25px]">
          <h4 className=" text-white font-semibold text-[38px]">{name}</h4>
          <p className="text-yellow-500">{"⭐".repeat(rating)}</p>
        </div>
      </div>
      <p className="flex items-center m-[45px] text-white opacity-75 text-[24px] leading-0">{comment}</p>
    </div>
  );
};

export default TestimonialCard;
