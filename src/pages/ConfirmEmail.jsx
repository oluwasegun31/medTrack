import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { otpverifError, verifyOtp } from "../authentication/otpVerification";
import loadingImg from "../assets/loadingImg.svg";

export default function ConfirmEmail() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [otpField, setOtpField] = useState(["", "", "", "", ""]);
  const otpInputs = useRef([]);
  // function that handle the input of field
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value !== "") {
      const newOtp = [...otpField];
      newOtp[index] = value;
      setOtpField(newOtp);

      if (index < otpField.length - 1) {
        otpInputs.current[index + 1].focus();
      }
    }
  };
  // function that handle removing input on backspace
  const handleKeyDown = (e, index) => {
    // Delete the previous digit if Backspace is pressed and the current input is empty
    if (e.key === "Backspace" && otpField[index] === "" && index > 0) {
      const newOtp = [...otpField];
      newOtp[index - 1] = "";
      setOtpField(newOtp);
      otpInputs.current[index - 1].focus();
    }
    // Delete the current digit if Backspace is pressed and the current input is not empty
    if (e.key === "Backspace" && otpField[index] !== "") {
      const newOtp = [...otpField];
      newOtp[index] = "";
      setOtpField(newOtp);
    }
    // Focus on the previous input if the current one is empty and Backspace is pressed
    if (e.key === "Backspace" && index > 0 && otpField[index] === "") {
      otpInputs.current[index - 1].focus();
    }
  };
  // function to handle submiting the otp and logic behind it
  const submitOtp = async () => {
    console.log(location);
    setIsLoading(true);
    let result = "";
    otpField.forEach((item) => {
      result += item;
    });
    const otp = parseInt(result);
    if (result.length === 5) {
      const email = location.state.email;
      const userType = location.state.userType;
      const success = await verifyOtp(email, userType, otp);
      success ? console.log("successful") : console.error(otpverifError);
      setIsLoading(false);
    } else {
      console.error("incomplete");
    }
  };

  return (
    <section className="md:w-[550px] w-full mx-auto min-h-[90vh] flex flex-col justify-center items-start gap-8 md:px-0 px-5">
      <div
        className="flex justify-start items-center text-white text-[18px] gap-1 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M23.625 14H4.375"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.25 6.125L4.375 14L12.25 21.875"
            stroke="white"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Back</p>
      </div>
      <section className="sm:px-7 px-5 sm:py-9 py-7 bg-primary-200 w-full rounded-2xl flex flex-col justify-start items-start gap-6 text-white">
        <p className="md:text-3xl text-[20px] font-bold">
          Check your message box
        </p>
        <p className="md:text-base text-sm font-normal">
          Enter the 5 digit code sent to (to****@gmail.com)
        </p>
        <div className="grid grid-cols-5 sm:gap-6 gap-2 mx-auto">
          {otpField.map((digit, index) => {
            return (
              <input
                type="number"
                className="sm:w-[65px] w-[50px] sm:h-[65px] h-[50px] px-4 outline-none bg-primary-400 text-center sm:text-2xl text-lg"
                max={1}
                min={0}
                placeholder="*"
                key={index}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(input) => (otpInputs.current[index] = input)}
              />
            );
          })}
        </div>
        <button
          type="button"
          className="w-full p-3 bg-tertiary-200 text-primary-400 font-[700] rounded-[36px] cursor-pointer hover:bg-secondary/75 transition-all duration-300 flex justify-center items-center gap-3"
          onClick={submitOtp}
        >
          continue
          {isLoading && (
            <img
              src={loadingImg}
              alt="loading.."
              className="animate-spin w-6 object-contain"
            />
          )}
        </button>
      </section>
    </section>
  );
}
