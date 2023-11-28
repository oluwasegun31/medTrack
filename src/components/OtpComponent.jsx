import { useContext } from "react";
import { OtpContext } from "../context";
import loadingImg from "../assets/loadingImg.svg";
import PropTypes from "prop-types";
/**
 * Functional component for rendering the OTP (One-Time Password) input form.
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.submitOtp - The function to be called when the OTP is submitted.
 * @returns {JSX.Element} - React component
 */
export default function OtpComponent({ submitOtp }) {
  // Accessing OTP-related states and functions from the context
  const { isLoading, otpField, setOtpField, otpInputs } =
    useContext(OtpContext);

  /**
   * Handles the change in OTP input fields.
   * @param {Object} e - The event object.
   * @param {number} index - The index of the OTP input field being changed.
   */
  const handleChange = (e, index) => {
    const value = e.target.value;
    // Only allow numeric values
    if (!isNaN(value) && value !== "") {
      const newOtp = [...otpField]; // Create a copy of the OTP array
      newOtp[index] = value; // Update the corresponding digit
      setOtpField(newOtp); // Set the updated OTP array;

      // Focus on the next input if available
      if (index < otpField.length - 1) {
        otpInputs.current[index + 1].focus();
      }
    }
  };

  /**
   * Handles keydown events in OTP input fields.
   * @param {Object} e - The event object.
   * @param {number} index - The index of the OTP input field.
   */
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

  return (
    <section className="sm:px-7 px-5 sm:py-9 py-7 bg-primary-200 w-full rounded-2xl flex flex-col justify-start items-start gap-6 text-white">
      <p className="md:text-3xl text-[20px] font-bold">
        Check your message box
      </p>
      <p className="md:text-base text-sm font-normal">
        Enter the 5-digit code sent to your email
      </p>
      <div className="grid grid-cols-5 sm:gap-6 gap-2 mx-auto">
        {otpField.map((digit, index) => (
          <input
            type="number"
            className="sm:w-[65px] w-[50px] sm:h-[65px] h-[50px] px-4 outline-none bg-primary-400 text-center sm:text-2xl text-lg focus:outline-secondary"
            max={1}
            min={0}
            placeholder="*"
            key={index}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(input) => (otpInputs.current[index] = input)}
          />
        ))}
      </div>
      <button
        type="button"
        className="w-full p-3 bg-tertiary-200 text-primary-400 font-[700] rounded-[36px] cursor-pointer hover:bg-secondary/75 transition-all duration-300 flex justify-center items-center gap-3"
        onClick={submitOtp}
      >
        Continue
        {isLoading && (
          <img
            src={loadingImg}
            alt="loading.."
            className="animate-spin w-6 object-contain"
          />
        )}
      </button>
    </section>
  );
}

OtpComponent.propTypes = {
  submitOtp: PropTypes.func,
};
