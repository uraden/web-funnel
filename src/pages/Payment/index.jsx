function Payment() {
  return (
    <div className="mt-[20px]">
      <div className="text-white text-[20px] flex items-center justify-end backdrop-blur-sm bg-white/30 px-[20px] py-[2px] rounded-[10px] mx-[19px]">
        <div> user@gmail.com</div>
        <img
          src="/images/human.png"
          alt="icon"
          className="h-[20px] ml-[10px]"
        />
      </div>

      <div className="px-[70px] text-white text-[24px] mt-[20px]">
        We`ve successfully matched{" "}
        <span className="text-[#E966C3]">thousands</span> with their ideal partners
      </div>
      <div className="relative w-full h-[320px] flex justify-center items-center">
        <div className="absolute w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://placehold.co/600x400?text=image1"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute w-[140px] h-[140px] rounded-full overflow-hidden shadow-lg top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://placehold.co/600x400?text=image2"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute w-[130px] h-[130px] rounded-full overflow-hidden shadow-lg top-[70%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://placehold.co/600x400?text=image3"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute w-[100px] h-[100px] rounded-full overflow-hidden shadow-lg top-[60%] left-[80%] transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://placehold.co/600x400?text=image4"
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="text-[#E966C3] bg-white px-[20px] py-[2px] rounded-[15px] text-[20px] mr-[]"> 4.32/week</div>
        <div className="text-[#E966C3] bg-white px-[20px] py-[2px] rounded-[15px] text-[20px]"> -61% DISCOUNT</div>
      </div>
      <div>
        <div className="text-[#E966C3] text-center font-bold my-[10px] text-[40px]"> $1.34/week</div>
        <div className="text-slate-300 text-center text-[20px]">Billed as one payment of $69.99</div>
        <div className="text-white"> View other plans</div>
        <div className="btn">
        <button
          type="primary"
          className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[402px] start-btn"
        >
          Get the app
        </button>
      </div>
      </div>
    </div>
  );
}

export default Payment;
