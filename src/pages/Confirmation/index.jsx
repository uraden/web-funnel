function Confirmation() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[30px]">
        <img src="/images/confirmation.svg" />
      </div>
      <div>
        <h1 className="text-white text-[34px] leading-[40px] mt-[24px]">
          Your account is activated!
        </h1>
      </div>
      <div className="text-[#8c8b8d] text-[24px]">
      Here is your voucher number:
      </div>

      <div className="text-[#E966C3] text-[34px] font-[700] mt-[24px]">
         6GE-E4F
      </div>
      <div className="text-white text-[30px] leading-[40px] mt-[24px] font-[800]">
      Use the following button to download Paradiz and activate your account:
      </div>

      <button className="mt-[24px] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] rounded-[40px] w-[400px] start-btn">
        Button
        </button>
        <div className="text-[#8c8b8d] text-[18px] mt-[20px]">
        Want to deactivate your subscription? 
      </div>
      <div className="text-[#8c8b8d] text-[18px]">
  Please <a 
    href="https://www.google.com/search?sca_esv=767cd598432ecedb&rlz=1C5CHFA_enUZ1109UZ1109&sxsrf=ADLYWIIV4GEhE3JKgGgIUjJpU26kPpAO7A:1732181899372&q=cat&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JyJJclJuzBPl12qJyPx7ESJehObpS5jg6J88CCM-RK72sNV8xvbUxy-SoOtM-WmPLIjZzuRzEJJ0u2V8OeDS2QzrFq0l6uL0u5ydk68vXkBqxln9Kbinx1HZnJEg4P6VfVQ98eE&sa=X&ved=2ahUKEwiJlbG2kO2JAxXQBxAIHeseIuMQtKgLegQIFhAB&biw=1512&bih=857&dpr=2"
    onClick={(e) => e.target.classList.add('underline')} 
    className="text-[#8c8b8d] underline hover:text-[#E966C3]"
  >
    reach out to us
  </a> for cancellation.
</div>
    </div>
  );
}

export default Confirmation;
