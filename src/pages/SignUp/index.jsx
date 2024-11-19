import { useState } from "react";
import { Form } from "antd";
import Lottie from "lottie-react";
import spin from "../../../public/images/spin.json";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [form] = Form.useForm();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(emailValue));
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate("/users");
  };

  return (
    <div>
      <div className="h-[50vh] flex flex-col items-center">
        <h1 className="text-white leading-[40px] text-[34px] my-[24px] mx-[160px]">
          Thank You for Your Responses!
        </h1>
        <Lottie
          animationData={spin}
          loop={true}
          style={{ width: 200, height: 200 }}
        />
        <h2 className="text-[#E966C3] font-normal text-[24px] mx-[120px]">
          Searching for matches based on your preferences...
        </h2>
      </div>
      <div className="signup-form">
        <h2 className="text-[25px]">Please enter your email</h2>
        <h3 className="text-[20px] mb-[30px]">
          to complete your account and save your preferences
        </h3>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <input
              type="email"
              className="form-input text-white text-[20px]"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Item>
          <p className="text-white text-[14px]">We don’t share any personal information </p>
          <Form.Item>
            <button
              type="submit"
              disabled={!isEmailValid}
              className={`text-[#FFFFFF] text-[18px] leading-[21px] font-bold py-[20px] px-[19px] mt-[20px] rounded-[40px] w-[400px] ${
                isEmailValid ? "start-btn" : "start-btn-dark"
              }`}
            >
              Continue
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
