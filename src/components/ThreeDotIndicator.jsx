const ThreeDotIndicator = () => {
  return (
    <div className="absolute flex items-center w-[85px] h-[11px] top-[6869px] left-[844px]">
      {/* short rounded dash */}
      <div className="w-[22px] h-[6px] rounded-full bg-[#d9d9d9] mr-[9px]" />

      {/* two small dots */}
      <div className="w-[6px] h-[6px] rounded-full bg-[#d9d9d9] mr-[6px]" />
      <div className="w-[6px] h-[6px] rounded-full bg-[#d9d9d9]" />
    </div>
  );
};

export default ThreeDotIndicator;