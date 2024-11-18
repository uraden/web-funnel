import { useState } from "react";
import { message, Steps, theme } from "antd";

function Form() {
  const steps = [
    {
      content: "First-content",
    },
    {
      content: "Second-content",
    },
    {
      content: "Last-content",
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // lineheight should fit the sreen size
    // maxHeight: '100vh',
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,

    marginTop: 16,
  };
  return (
    <div>
      <Steps 
        current={current} 
        items={items} 
          progressDot  
        />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
      <div className="flex flex-col items-center">
        {current < steps.length - 1 && (
          <button type="primary" onClick={() => next()} className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[302px] start-btn">
          Continue 
          </button>
        )}
        {current === steps.length - 1 && (
          <button
            className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[302px] start-btn"
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </button>
        )}
        {current > 0 && (
          <button
            className="prev-btn text-[18px] leading-[21px] font-bold py-[20px] px-[19px] rounded-[40px] w-[302px] mt-[10px]" 
           
            onClick={() => prev()}
          >
            Previous
          </button>
        )}
        </div>
      </div>
    </div>
  );
}

export default Form;
