import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const navigate = useNavigate();
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
                    <div className="text-[28px]">Nikole, 58</div>
                  </div>
                  <div className="flex">
                    <img
                      src="/images/pin.svg"
                      alt="icon"
                      className="h-[20px] w-[20px] mr-[10px]"
                    />

                    <div className="text-[16px]">1.2 miles away</div>
                  </div>
                  <div className="flex">
                    <p className="text-[16px] bg-[#9d6fff] px-[10px] rounded-[15px] mt-[5px] mr-[5px]">Likes hiking</p>
                    <p className="text-[16px] bg-[#fcba03] px-[10px] rounded-[15px] mt-[5px]">Likes swimming</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center p-0 m-0">
            <div className="relative">
                <img
                  src="https://placehold.co/450x450?text=Image+2"
                  alt="icon"
                  className="rounded-[10px]"
                />
                <div className="absolute bottom-4 left-4 text-white flex flex-col items-baseline">
                  <div className=" flex items-center">
                    <div className="h-[20px] w-[20px] bg-green-600 rounded-[10px] mr-[10px]"></div>
                    <div className="text-[28px]">Alison, 38</div>
                  </div>
                  <div className="flex">
                    <img
                      src="/images/pin.svg"
                      alt="icon"
                      className="h-[20px] w-[20px] mr-[10px]"
                    />

                    <div className="text-[16px]">2 miles away</div>
                  </div>
                  <div>
                    <p className="text-[16px] bg-[#9d6fff] px-[10px] rounded-[15px] mt-[5px]">Likes hiking</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center p-0 m-0">
            <div className="relative">
                <img
                  src="https://placehold.co/450x450?text=Image+3"
                  alt="icon"
                  className="rounded-[10px]"
                />
                <div className="absolute bottom-4 left-4 text-white flex flex-col items-baseline">
                  <div className=" flex items-center">
                    <div className="h-[20px] w-[20px] bg-green-600 rounded-[10px] mr-[10px]"></div>
                    <div className="text-[28px]">Nikole, 58</div>
                  </div>
                  <div className="flex">
                    <img
                      src="/images/pin.svg"
                      alt="icon"
                      className="h-[20px] w-[20px] mr-[10px]"
                    />

                    <div className="text-[16px]">1.2 miles away</div>
                  </div>
                  <div>
                    <p className="text-[16px] bg-[#9d6fff] px-[10px] rounded-[15px] mt-[5px]">Likes hiking</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center p-0 m-0">
            <div className="relative">
                <img
                  src="https://placehold.co/450x450?text=Image+4"
                  alt="icon"
                  className="rounded-[10px]"
                />
                <div className="absolute bottom-4 left-4 text-white flex flex-col items-baseline">
                  <div className=" flex items-center">
                    <div className="h-[20px] w-[20px] bg-green-600 rounded-[10px] mr-[10px]"></div>
                    <div className="text-[28px]">Nikole, 58</div>
                  </div>
                  <div className="flex">
                    <img
                      src="/images/pin.svg"
                      alt="icon"
                      className="h-[20px] w-[20px] mr-[10px]"
                    />

                    <div className="text-[16px]">5.1 miles away</div>
                  </div>
                  <div>
                    <p className="text-[16px] bg-[#9d6fff] px-[10px] rounded-[15px] mt-[5px]">Likes swimming</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center p-0 m-0">
            <div className="relative">
                <img
                  src="https://placehold.co/450x450?text=Image+5"
                  alt="icon"
                  className="rounded-[10px]"
                />
                <div className="absolute bottom-4 left-4 text-white flex flex-col items-baseline">
                  <div className=" flex items-center">
                    <div className="h-[20px] w-[20px] bg-green-600 rounded-[10px] mr-[10px]"></div>
                    <div className="text-[28px]">Nikole, 58</div>
                  </div>
                  <div className="flex">
                    <img
                      src="/images/pin.svg"
                      alt="icon"
                      className="h-[20px] w-[20px] mr-[10px]"
                    />

                    <div className="text-[16px]">1.2 miles away</div>
                  </div>
                  <div>
                    <p className="text-[16px] bg-[#9d6fff] px-[10px] rounded-[15px] mt-[5px]">Likes hiking</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
      <div className="btn">
        <button
          type="primary"
          onClick={() => navigate("/payment")}
          className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[402px] start-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
