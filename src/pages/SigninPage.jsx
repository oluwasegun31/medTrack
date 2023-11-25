import { Link } from "react-router-dom";
import { InputForm } from "../components";

export default function SigninPage() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center md:px-0 px-4">
      <p className="text-white md:text-2xl text-base font-[700] leading-7 mb-10">
        Welcome Back! Please <span className="text-tertiary-400">Log in!</span>
      </p>
      <section className="md:px-7 px-4 md:py-9 py-8 bg-primary-200 rounded-2xl md:w-auto w-full">
        <InputForm input={"Log in"} forgetPass />

        <p className="w-full text-center text-base font-normal text-white">
          No account yet?
          <Link className="text-secondary underline ml-1" to={"/signup"}>
            Sign up
          </Link>
        </p>
      </section>
    </section>
  );
}
