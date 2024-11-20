function PaymentMethod() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 ">
        <div className=" flex justify-center">
          <img src="/images/logo.svg" className="mr-[10px]" />
          <div className="text-white text-[30px] font-bold tracking-wide">
            ELIZIUM
          </div>
        </div>
        <div className="text-center mt-[10px]">
          <p className="mb-2x text-white text-[20px] px-[150px]">
            Revolutionizing casual dating Enjoyed by over 500,000 people
          </p>
          <div className="flex justify-center space-x-2">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <img
                  key={index}
                  src="/images/star.svg"
                  alt="Star"
                  className="w-6 h-6"
                />
              ))}
          </div>
        </div>
        <div className="bg-[#F3F3F30F] py-[10px] mx-[40px] mt-[20px] rounded-[10px] flex justify-evenly items-center">
          <p className="text-white text-[18px] font-bold">
            Personalized offer reserved
          </p>
          <p className="text-[#E966C3] text-[28px] font-black">09 : 55</p>
        </div>
        <hr className="border-[#5e5d60] border-[1px] mt-[20px] mx-[40px]" />
        <div className="flex justify-evenly items-center">
          <p className="text-white text-[18px] font-bold">Total today</p>
          <p className="text-[#E966C3] text-[28px] font-black">$0.00</p>
        </div>
        <hr className="border-[#5e5d60] border-[1px]  mx-[40px]" />

        <div className="mt-[15px] mx-[35px] flex items-end">
          <img src="/images/per.svg" className="w-[20px] h-[20px] mr-[5px]" />
          <p className="text-[#00AA77] text-[16px] font-bold">
            Code PARA23 applied!
          </p>
        </div>

        <div className="mt-[10px] mx-[35px] font-[600]">
          <p className="text-white text-left">
            You will be charged $69.99 for your subscription. You can cancel
            anytime to avoid being charged for the next payment.
          </p>
        </div>

        <div className="flex justify-between mx-[35px] mt-[20px]">
          <div className="flex">
            <img
              src="/images/calendar.svg"
              className="w-[40px] h-[40px] mr-[10px]"
            />
            <div>
              <p className="text-white font-[700]">No commitment.</p>
              <p className="text-white font-[700]">Cancel anytime.</p>
            </div>
          </div>
          <div className="flex">
            <img
              src="/images/trust.svg"
              className="w-[40px] h-[40px] mr-[10px]"
            />
            <div className="flex flex-col items-baseline">
              <p className="text-white font-[700]">30-Day Money-Back</p>
              <p className="text-white font-[700]">Guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-[20px]">
        <div className="text-center font-[800] text-[24px] text-white">
          Total due today: $69.99
        </div>

        <div className="mt-[10px] bg-[#056FDD] text-white font-600] text-[20px] flex justify-center items-center py-[10px] rounded-[25px] mx-[40px]">
          <img src="/images/card.svg" className="w-[20px] h-[20px] mr-[10px]" />
          <p> Debit / Credit Card </p>
        </div>

        <div className="relative flex py-3 items-center mx-[40px]">
          <div className="flex-grow border-t border-white"></div>
          <span className="flex-shrink mx-4 text-white text-[18px]">OR</span>
          <div className="flex-grow border-t border-white"></div>
        </div>

        <div className="mt-[10px] bg-[#FFC700] text-white font-[600] text-[20px] flex justify-center items-center py-[10px] rounded-[25px] mx-[40px]">
          <img src="/images/paypal.svg" className="w-[20px] h-[20px] mr-[10px]" />
          <p className="font-[600] text-[#2790C3]"> <span className="text-[#27346A]">Pay</span>Pal </p>
        </div>

        <div className="mt-[10px] bg-[#FFFFFF] text-white text-[20px] flex justify-center items-center py-[10px] rounded-[25px] mx-[40px]">
          <img src="/images/apple.svg" className="" />
        </div>

        <div className="mt-[10px] bg-[#EEEEEE] text-white font-[600] text-[20px] flex justify-center items-center py-[10px] rounded-[25px] mx-[40px]">
          <img src="/images/google.svg" className="" />
          
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
