import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

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
      <section className="px-7 py-9 bg-primary-200 w-full rounded-2xl flex flex-col justify-start items-start text-white">
        <p className="md:text-3xl text-[20px] font-bold mb-2">
          Forgot Password?
        </p>
        <p className="md:text-base text-sm font-normal mb-8">
          Enter the email addess associated with your account
        </p>
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
              className="w-full md:p-5 p-4 rounded-lg bg-primary-400 outline-none text-white text-base font-normal focus:outline-secondary"
            />
          </div>
          <button
            type="button"
            className="w-full p-3 bg-tertiary-200 text-primary-400 font-[700] rounded-[36px] cursor-pointer hover:bg-secondary/75 transition-all duration-300"
          >
            Continue
          </button>
        </form>
      </section>
    </section>
  );
}
