import { useState, useEffect } from "react";
import { message, Steps, theme, Form as AntdForm } from "antd";

function Form() {
  const [form] = AntdForm.useForm(); // Form instance to handle form data
  const [current, setCurrent] = useState(0);
  const [location, setLocation] = useState(""); // State to hold location

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

  const steps = [
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#FE34F4] text-[48px] font-bold">18+</div>
          <div className="text-[#ffffff] font-helvetica text-[40px] font-normal leading-[33.6px] text-center mb-[20px]">
            How old are you?
          </div>
          <div className="text-[#ffffff] text-[20px] mb-[20px]">
            You must be 18+ years or older to use our platform
          </div>

          <AntdForm.Item
            name="age"
            rules={[
              { required: true, message: "Please enter your age!" },
              { pattern: /^[0-9]+$/, message: "Please enter a valid number" },
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
            <input className="form-input text-white text-[20px]" />
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#ffffff] text-[40px] font-normal leading-[33.6px] text-center mb-[20px]">
            Where are you located?
          </div>
          <div className="text-[#ffffff] text-[20px] mb-[20px]">
            We need this information to match you with potential partners nearby
          </div>
          <AntdForm.Item
            name="location"
            initialValue={location}
            rules={[{ required: true, message: "Please enter your location" }]}
          >
            <input
              className="form-input text-white text-[20px]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="flex flex-col items-center">
            <div className="relative h-[400px]">
              <img
                src="https://placehold.jp/150x150.png"
                alt="img-1"
                className="rounded-[50%]  mt-[20px]"
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
          </div>
          <div className="text-[#ffffff] text-[24px] font-normal leading-[43.6px]">
            Hooray! We have <span className="text-[#E964C4;]">4,563 </span>{" "}
            women near Staines-upon-Thames, United Kingdom on our platform{" "}
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-white text-[40px] mx-[70px] mb-[30px]">
            Take this short quiz about your wishes{" "}
          </div>
          <div className="text-white text-[28px]  mx-[70px] leading-[30px]">
            We`ll match you with partners who share the same desires
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#ffffff] text-[40px] font-normal leading-[33.6px] text-center mb-[20px]">
            Who are you attracted to?
          </div>
          <AntdForm.Item
            name="genderPreference"
            rules={[{ required: true, message: "Please select a preference!" }]}
          >
            <div className="flex flex-col justify-center space-y-4 items-center">
              {["Men", "Women", "Both"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`text-white text-[18px] font-bold py-[10px] px-[20px] rounded-[40px] w-[380px] border-2 border-[#e98dcf] hover:text-white transition-all select-btn ${
                    form.getFieldValue("genderPreference") === option
                      ? "start-btn "
                      : "bg-transparent"
                  }`}
                  onClick={() => {
                    form.setFieldValue("genderPreference", option);
                    next();
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#ffffff] text-[40px] font-normal leading-[33.6px] text-center mb-[20px]">
            Choose an Age Group
          </div>
          <AntdForm.Item
            name="ageGroupPreference"
            rules={[{ required: true, message: "Please select an age group!" }]}
          >
            <div className="flex flex-col justify-center space-y-4 items-center">
              {["Teen", "Milf"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`text-white text-[18px] font-bold py-[10px] px-[20px] rounded-[40px] w-[380px] border-2 border-[#e98dcf] hover:text-white transition-all select-btn ${
                    form.getFieldValue("genderPreference") === option
                      ? "start-btn "
                      : "bg-transparent"
                  }`}
                  onClick={() => {
                    form.setFieldValue("ageGroupPreference", option);
                    next();
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#ffffff] text-[40px] font-normal leading-[40px] text-center mb-[20px] mx-[20px]">
            What type of sex partner are you looking for?
          </div>
          <AntdForm.Item
            name="sexPartnerPreference"
            rules={[{ required: true, message: "Please select a preference!" }]}
          >
            <div className="flex flex-col justify-center space-y-4 items-center">
              {["Long-term", "Short-term", "ONS"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`text-white text-[18px] font-bold py-[10px] px-[20px] rounded-[40px] w-[380px] border-2 border-[#e98dcf] hover:text-white transition-all select-btn ${
                    form.getFieldValue("sexPartnerPreference") === option
                      ? "start-btn "
                      : "bg-transparent"
                  }`}
                  onClick={() => {
                    form.setFieldValue("sexPartnerPreference", option);
                    next();
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#ffffff] text-[40px] font-normal leading-[40px] text-center mb-[20px]">
            Are you open to sexual experimentation?
          </div>
          <AntdForm.Item
            name="openToExperimentation"
            rules={[{ required: true, message: "Please select a preference!" }]}
          >
            <div className="flex flex-col justify-center space-y-4 items-center">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`text-white text-[18px] font-bold py-[10px] px-[20px] rounded-[40px] w-[380px] border-2 border-[#e98dcf] hover:text-white transition-all select-btn ${
                    form.getFieldValue("openToExperimentation") === option
                      ? "start-btn "
                      : "bg-transparent"
                  }`}
                  onClick={() => {
                    form.setFieldValue("openToExperimentation", option);
                    next();
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#ffffff] text-[40px] font-normal leading-[40.6px] text-center mb-[20px] mx-[20px]">
            Do you love when woman initiates sex?
          </div>
          <AntdForm.Item
            name="womanInitiates"
            rules={[{ required: true, message: "Please select a preference!" }]}
          >
            <div className="flex flex-col justify-center space-y-4 items-center">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`text-white text-[18px] font-bold py-[10px] px-[20px] rounded-[40px] w-[380px] border-2 border-[#e98dcf] hover:text-white transition-all select-btn ${
                    form.getFieldValue("womanInitiates") === option
                      ? "start-btn "
                      : "bg-transparent"
                  }`}
                  onClick={() => {
                    form.setFieldValue("womanInitiates", option);
                    next();
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#ffffff] text-[40px] font-normal leading-[40px] text-center mb-[20px] mx-[20px]">
          Are you open to sex on the 1st date?
          </div>
          <AntdForm.Item
            name="intimacyOnFirstDate"
            rules={[{ required: true, message: "Please select a preference!" }]}
          >
            <div className="flex flex-col justify-center space-y-4 items-center">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`text-white text-[18px] font-bold py-[10px] px-[20px] rounded-[40px] w-[380px] border-2 border-[#e98dcf] hover:text-white transition-all select-btn ${
                    form.getFieldValue("intimacyOnFirstDate") === option
                      ? "start-btn "
                      : "bg-transparent"
                  }`}
                  onClick={() => {
                    form.setFieldValue("intimacyOnFirstDate", option);
                    next();
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#ffffff] text-[40px] font-normal leading-[40px] text-center mb-[20px] mx-[20px]">
          Do you like anal sex?
          </div>
          <AntdForm.Item
            name="analSex"
            rules={[{ required: true, message: "Please select a preference!" }]}
          >
            <div className="flex flex-col justify-center space-y-4 items-center">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`text-white text-[18px] font-bold py-[10px] px-[20px] rounded-[40px] w-[380px] border-2 border-[#e98dcf] hover:text-white transition-all select-btn ${
                    form.getFieldValue("analSex") === option
                      ? "start-btn "
                      : "bg-transparent"
                  }`}
                  onClick={() => {
                    form.setFieldValue("analSex", option);
                    next();
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </AntdForm.Item>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[55vh]">
          <div className="text-[#ffffff] text-[40px] font-normal leading-[40px] text-center mb-[20px] mx-[20px]">
          Are you open to a threesome?
          </div>
          <AntdForm.Item
            name="3some"
            rules={[{ required: true, message: "Please select a preference!" }]}
          >
            <div className="flex flex-col justify-center space-y-4 items-center">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`text-white text-[18px] font-bold py-[10px] px-[20px] rounded-[40px] w-[380px] border-2 border-[#e98dcf] hover:text-white transition-all select-btn ${
                    form.getFieldValue("3some") === option
                      ? "start-btn "
                      : "bg-transparent"
                  }`}
                  onClick={() => {
                    form.setFieldValue("3some", option);
                    // finish the form and submit
                    onFinish();
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </AntdForm.Item>
        </div>
      ),
    },
   
  ];

  useEffect(() => {
    if (current === 1) {
      const fetchLocation = async () => {
        try {
          const response = await fetch("https://ipapi.co/json/");
          const data = await response.json();
          setLocation(data.country_name || "");
          form.setFieldsValue({ location: data.country_name });
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      };

      fetchLocation();
    }
  }, [current, form]);



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
        <div style={{ marginTop: 24 }}>
          <div className="flex flex-col items-center">
            {current < steps.length - 1 && current <= 3 && (
              <button
                type="primary"
                onClick={next}
                className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[302px] start-btn"
              >
                {current === 3 ? "I'm ready" : "Continue"}
              </button>
            )}
            {/* {current === steps.length - 1 && (
              <button
                type="primary"
                onClick={onFinish}
                className="bg-[#e98dcf] text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[302px] start-btn"
              >
                Done
              </button>
            )} */}
            {current > 0 && current !== 3 && (
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
