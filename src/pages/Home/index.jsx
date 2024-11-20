function SignUp() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[400px] mb-[40px]">
        <img
          src="https://placehold.jp/150x150.png"
          alt="img-1"
          className="rounded-[50%]  mt-[40px]"
        />
        <img
          src="https://placehold.jp/200x200.png"
          alt="img-2"
          className="rounded-[50%]   ml-[150px] mt-[-100px]"
        />
        <img
          src="https://placehold.jp/190x190.png"
          alt="img-3"
          className="rounded-[50%]  mt-[-90px] ml-[-20px]"
        />
      </div>

      <div className="text-[#FFFFFF] font-black	text-[24px] leading-[33.6px] mb-[20px]">
        Find an ideal sex partner sharing your desires{" "}
      </div>
      <div className="w-[225px] py-[8px] px-[19px] text-center text-[#FFFFFF] text-[18px] leading-[21px] font-bold backdrop-blur-sm bg-white/50 rounded-[40px]">
        Our community has over <span className="text-[#e31aaa]">1M</span> hot
        people
      </div>
      <div>
        <button 
          onClick={() => window.location.href = '/form'}
          className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[302px] start-btn">
        Let`s start
                </button>
      </div>
    </div>
  );
}

export default SignUp;
