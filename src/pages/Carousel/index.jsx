import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
          We’ve got <span className="text-[#E964C4]">348 women</span> in your
          area who are looking for similar sexual experiences as you
        </div>
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1.3}
            spaceBetween={10}
          >
            <SwiperSlide className="flex justify-center p-0 m-0">
              <div className="relative">
                <img
                  src="https://placehold.co/450x450?text=Image+1"
                  alt="icon"
                  className="rounded-[10px]"
                />
                <div className="absolute bottom-4 left-4 text-white flex flex-col items-baseline">
                  <div className=" flex items-center"> 
                  <div className="h-[20px] w-[20px] bg-green-600 rounded-[10px] mr-[10px]"></div>
                  <div className="text-[28px]">Age and Name</div>
                  </div>
                  <div><p className="text-[16px]">1.2 miles away</p></div>
                  <div><p className="text-[16px]">Likes hiking</p></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center p-0 m-0">
              <img
                src="https://placehold.co/450x450?text=Image+2"
                alt="icon"
                className="rounded-[10px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center p-0 m-0">
              <img
                src="https://placehold.co/450x450?text=Image+3"
                alt="icon"
                className="rounded-[10px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center p-0 m-0">
              <img
                src="https://placehold.co/450x450?text=Image+4"
                alt="icon"
                className="rounded-[10px]"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center p-0 m-0">
              <img
                src="https://placehold.co/450x450?text=Image+5"
                alt="icon"
                className="rounded-[10px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="btn">
        <button
          type="primary"
          className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[402px] start-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
