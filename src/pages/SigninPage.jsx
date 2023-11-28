import { Link } from "react-router-dom";
import { InputForm } from "../components";
import { useState } from "react";

export default function SigninPage() {
  const [userType, setUserType] = useState("patient");

  const onChangeUserType = () => {
    userType === "patient"
      ? setUserType("healthProfessional")
      : setUserType("patient");
  };

  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center md:px-0 px-4 relative">
      <p className="text-white md:text-2xl text-base font-[700] leading-7 mb-8">
        Welcome Back! Please <span className="text-tertiary-400">Log in!</span>
      </p>
      <section className="md:px-7 px-4 md:py-9 py-8 bg-primary-200 rounded-2xl md:w-auto w-full mb-2">
        <InputForm input={"Log in"} forgetPass userType={userType} />

        <p className="w-full text-center text-base font-normal text-white">
          No account yet?
          <Link className="text-secondary underline ml-1" to={"/auth/signup"}>
            Sign up
          </Link>
        </p>
      </section>
      <p
        className="text-white text-base font-normal underline cursor-pointer md:absolute relative md:-top-12 top-auto md:right-12 right-auto"
        onClick={() => onChangeUserType()}
      >
        Switch to {userType === "patient" ? "Health Care" : "Patient"}
      </p>
    </section>
  );
}
