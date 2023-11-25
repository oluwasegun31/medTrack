import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { FormContext } from "../context";
import loadingImg from "../assets/loadingImg.svg";

export default function InputForm({ input, forgetPass, onclick }) {
  const { emailRef, passwordRef, isLoading, formErr } = useContext(FormContext);
  return (
    <form className="flex flex-col justify-start items-start gap-6 mb-4">
      {formErr && (
        <p className="w-full text-center text-red-600 text-sm italic">
          {formErr}
        </p>
      )}
      <div className="flex flex-col justify-start items-start md:gap-2 gap-1 w-full">
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
          className="md:w-[488px] w-full md:p-5 p-4 rounded-lg bg-primary-400 outline-none text-white text-base font-normal focus:outline-secondary"
          ref={emailRef}
        />
      </div>
      <div className="flex flex-col justify-start items-start md:gap-2 gap-1 w-full relative">
        <label
          htmlFor="password"
          className="text-white capitalize font-normal text-base"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="md:w-[488px] w-full md:p-5 p-4 rounded-lg bg-primary-400 outline-none text-white text-base font-normal focus:outline-secondary"
          ref={passwordRef}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          className="absolute top-[50%] translate-y-[50%] right-4 cursor-pointer"
        >
          <path
            d="M3.75 3.625L16.25 17.375"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.1012 12.8127C11.5277 13.3381 10.7774 13.6282 9.99967 13.6252C9.36894 13.6252 8.75299 13.4343 8.23279 13.0776C7.7126 12.7209 7.31252 12.2151 7.08513 11.6268C6.85775 11.0385 6.81372 10.3951 6.95882 9.78133C7.10392 9.16752 7.43136 8.61198 7.8981 8.18774"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.78125 5.85913C2.59375 7.46851 1.25 10.4998 1.25 10.4998C1.25 10.4998 3.75 16.1248 10 16.1248C11.4645 16.1367 12.9108 15.7992 14.2188 15.1404"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.2972 13.711C18.0003 12.1875 18.7503 10.5 18.7503 10.5C18.7503 10.5 16.2503 4.87502 10.0003 4.87502C9.45848 4.87395 8.91751 4.91838 8.38312 5.00783"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5859 7.42969C11.2505 7.55561 11.8561 7.89427 12.3113 8.39457C12.7665 8.89487 13.0466 9.52965 13.1094 10.2031"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {forgetPass && (
        <Link
          className="w-full text-right text-secondary text-base font-[500]"
          to={"forgot-password"}
        >
          Forget Password
        </Link>
      )}
      <button
        type="button"
        className="w-full p-3 bg-tertiary-200 text-primary-400 font-[700] rounded-[36px] cursor-pointer hover:bg-secondary/75 transition-all duration-300 flex justify-center items-center gap-3"
        onClick={onclick}
      >
        {input}
        {isLoading && (
          <img
            src={loadingImg}
            alt="loading.."
            className="animate-spin w-6 object-contain"
          />
        )}
      </button>
    </form>
  );
}

InputForm.propTypes = {
  input: PropTypes.string,
  forgetPass: PropTypes.bool,
  onclick: PropTypes.func,
};
