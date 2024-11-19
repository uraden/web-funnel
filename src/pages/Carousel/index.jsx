function Carousel() {
  return (
    <div className="mt-[20px]">
      <div>
        <div className="text-white text-[20px] flex items-center justify-end backdrop-blur-sm bg-white/30 px-[20px] py-[2px] rounded-[10px] mx-[19px]">
          <div> user@gmail.com</div>
          <img
            src="/images/human.png"
            alt="icon"
            className="h-[20px] ml-[10px]"
          />
        </div>
        <div className="text-white text-[26px] mx-[70px] mt-[20px]">
        We’ve got <span className="text-[#E964C4]">348 women</span> in your area who are looking for similar sexual experiences as you
        </div>
      </div>
      <div className="btn"></div>
    </div>
  );
}

export default Carousel;
