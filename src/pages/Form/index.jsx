import { useState } from "react";
import { message, Steps, theme, Input, Form as AntdForm } from "antd";

function Form() {
  const [form] = AntdForm.useForm(); // Form instance to handle form data
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      content: (
        <div>
          <div className="text-[#FE34F4] text-[48px] font-bold mt-[15vh]">
            18+
          </div>
          <div className="text-[#ffffff] font-helvetica text-[40px] font-normal leading-[33.6px] text-center mb-[20px]">
            How old are you?
          </div>
          <div className="text-[#ffffff] text-[20px] mb-[20px]">
            You must be 18+ years or older to use our platform
          </div>

          <AntdForm.Item
            name="age"
            rules={[
              {
                required: true,
                message: "Please enter your age!",
              },
              {
                pattern: /^[0-9]+$/,
                message: "Please enter a valid number",
              },
              {
                validator: (_, value) => {
                  if (value && Number(value) < 18) {
                    return Promise.reject("Age must be at least 18");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input className="form-inpt text-white text-[20px]" />
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div className="text-[#ffffff] font-helvetica text-[40px] font-normal leading-[33.6px] text-center mb-[20px] mt-[15vh]">
            Where are you located?
          </div>
          <div className="text-[#ffffff] text-[20px] mb-[20px]">
            We need this information to match you with a potential partners
            nearby
          </div>
          <AntdForm.Item
            name="location"
            rules={[{ required: true, message: "Please enter your location" }]}
          >
            <Input className="form-inpt text-white text-[20px]" />
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <AntdForm.Item
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number!" },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </AntdForm.Item>
      ),
    },
  ];

  const next = async () => {
    try {
      await form.validateFields();
      setCurrent(current + 1);
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = () => {
    const values = form.getFieldsValue(true);

    console.log("Form values:", values);
    message.success("Processing complete!");
  };

  const { token } = theme.useToken();

  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    marginTop: 16,
  };

  return (
    <div>
      <Steps
        current={current}
        items={steps.map((_, index) => ({ key: index }))}
      />
      <AntdForm form={form} layout="vertical">
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          <div className="flex flex-col items-center">
            {current < steps.length - 1 && (
              <button
                type="primary"
                onClick={next}
                className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[302px] start-btn"
              >
                Continue
              </button>
            )}
            {current === steps.length - 1 && (
              <button
                type="primary"
                onClick={onFinish}
                className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[302px] start-btn"
              >
                Done
              </button>
            )}
            {current > 0 && (
              <button
                onClick={prev}
                className="prev-btn text-[18px] leading-[21px] font-bold py-[20px] px-[19px] rounded-[40px] w-[302px] mt-[10px]"
              >
                Previous
              </button>
            )}
          </div>
        </div>
      </AntdForm>
    </div>
  );
}

export default Form;
