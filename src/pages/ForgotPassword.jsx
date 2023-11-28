import { useContext, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import loadingImg from "../assets/loadingImg.svg";
import {
  forgotPassword,
  forgotPasswordError,
} from "../authentication/forgotPassord";
import { OtpComponent, OtpError } from "../components";
import { OtpContext } from "../context";
import {
  resetVerifyOtp,
  resetOtpError,
} from "../authentication/resetpasswordOtp";

export default function ForgotPassword() {
  const emailRef = useRef();
  const [emailErr, setEmailErr] = useState(false);
  const [emailOtp, setEmailOtp] = useState(null);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoading, isError, setIsError, otpField } =
    useContext(OtpContext);

  if (!location.state) {
    return <Navigate to={"/auth/signin"} />;
  }
  const submitDetails = async () => {
    const email = emailRef.current.value;
    const userType = location.state?.userType;
    if (email === "") {
      return setEmailErr("Enter your Email Address");
    }
    setIsEmailLoading(true);
    const success = await forgotPassword(email, userType);
    if (success) {
      setEmailOtp(email);
      setIsEmailValid(true);
      console.log("sucessful");
    } else {
      forgotPasswordError === "Invalid Email Address"
        ? setEmailErr("Invalid Email Address")
        : setEmailErr(false);
    }

    setIsEmailLoading(false);
  };
  const submitOtp = async () => {
    if (!emailOtp) {
      return setIsEmailValid(false);
    }
    setIsLoading(true);
    let result = "";
    otpField.forEach((item) => {
      result += item;
    });
    const otp = parseInt(result);
    if (result.length === 5) {
      const userType = location.state?.userType;
      const success = await resetVerifyOtp(emailOtp, userType, otp);
      success ? console.log("successful") : setIsError(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
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
      {!isEmailValid ? (
        <section className="px-7 py-9 bg-primary-200 w-full rounded-2xl flex flex-col justify-start items-start text-white">
          <p className="md:text-3xl text-[20px] font-bold mb-2">
            Forgot Password?
          </p>
          <p className="md:text-base text-sm font-normal mb-5">
            Enter the email addess associated with your account
          </p>
          {emailErr && (
            <p className="text-red-500 text-base mb-2">{emailErr}</p>
          )}
          <form className="flex flex-col justify-start items-start gap-8 w-full">
            <div className="flex flex-col justify-start items-start md:gap-3 gap-2 w-full">
              <label
                htmlFor="email"
                className="text-white capitalize font-normal text-base"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className={`w-full md:p-5 p-4 rounded-lg bg-primary-400 outline-none text-white text-base font-normal focus:outline-secondary ${
                  emailErr ? "border border-red-500" : "border-none"
                }`}
                onFocus={() => setEmailErr(false)}
                ref={emailRef}
              />
            </div>
            <button
              type="button"
              className="w-full p-3 bg-tertiary-200 text-primary-400 font-[700] rounded-[36px] cursor-pointer hover:bg-secondary/75 transition-all duration-300 flex justify-center items-center gap-2 outline-none"
              onClick={() => submitDetails()}
            >
              Continue
              {isEmailLoading && (
                <img
                  src={loadingImg}
                  alt="loading..."
                  className="animate-spin"
                />
              )}
            </button>
          </form>
        </section>
      ) : (
        <OtpComponent submitOtp={submitOtp} />
      )}
      {isError && <OtpError message={resetOtpError} />}
    </section>
  );
}
