import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { otpverifError, verifyOtp } from "../authentication/otpVerification";
import { OtpComponent, OtpError } from "../components";
import { OtpContext } from "../context";
import { useContext } from "react";

export default function ConfirmEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoading, isError, setIsError, otpField } =
    useContext(OtpContext);

  // if access page directly redirect to sign up
  if (!location.state) {
    return <Navigate to={"/auth/signup"} replace={true} />;
  }

  // function to handle submiting the otp and logic behind it
  const submitOtp = async () => {
    setIsLoading(true);
    let result = "";
    otpField.forEach((item) => {
      result += item;
    });
    const otp = parseInt(result);
    if (result.length === 5) {
      const email = location.state?.email;
      const userType = location.state?.userType;
      const success = await verifyOtp(email, userType, otp);
      success ? console.log("successful") : setIsError(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
    setTimeout(() => setIsError(null), 4000);
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
      <OtpComponent submitOtp={submitOtp} />
      {isError && <OtpError message={otpverifError} />}
    </section>
  );
}
