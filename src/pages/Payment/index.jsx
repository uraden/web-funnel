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

      <div className="px-[70px] text-white text-[24px] mt-[30px]">
      We`ve successfully matched <span className="text-[#E966C3]">thousands</span> with their ideal sex partners
      </div>
      <div className="relative w-full h-[500px] flex justify-center items-center bg-black">

  <div className="absolute w-[200px] h-[200px] rounded-full overflow-hidden shadow-lg top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2">
    <img src="https://placehold.co/" alt="Image 1" className="w-full h-full object-cover" />
  </div>

 
  <div className="absolute w-[150px] h-[150px] rounded-full overflow-hidden shadow-lg top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <img src="https://placehold.co/" alt="Image 2" className="w-full h-full object-cover" />
  </div>

  
  <div className="absolute w-[150px] h-[150px] rounded-full overflow-hidden shadow-lg top-[70%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
    <img src="https://placehold.co/" alt="Image 3" className="w-full h-full object-cover" />
  </div>

 
  <div className="absolute w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg top-[60%] left-[80%] transform -translate-x-1/2 -translate-y-1/2">
    <img src="https://placehold.co/" alt="Image 4" className="w-full h-full object-cover" />
  </div>
</div>

    </div>
  );
}

export default Payment;
