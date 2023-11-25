import { Link, useNavigate } from "react-router-dom";
import { InputForm } from "../components";
import { handleSignup, signupError } from "../authentication/signup";
import { useContext } from "react";
import { FormContext } from "../context";

export default function SignupPage() {
  const { emailRef, passwordRef, setFormErr, setIsLoading } =
    useContext(FormContext);
  const navigate = useNavigate();
  const signUpUser = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === "" || password === "" || password.length <= 6) {
      setFormErr("input email and password. Let password Exceed 6 characters");
    } else {
      setIsLoading(true);
      setFormErr(null);
      const success = await handleSignup(email, password, "patient");
      if (success) {
        console.log("user signed in successfully");
        setFormErr(null);
        emailRef.current.value = "";
        passwordRef.current.value = "";
        setIsLoading(false);
        navigate("/signup/confirm-email", {
          state: { email, userType: "patient" },
        });
      } else {
        console.log("error");
        setFormErr(signupError);
        setIsLoading(false);
      }
    }
  };
  return (
    <section className="w-full min-h-[90vh] flex flex-col justify-center items-center md:px-0 px-4">
      <p className="text-white md:text-2xl text-base font-[700] leading-7 mb-10">
        You are welcome! Please{" "}
        <span className="text-tertiary-400">Sign up!</span>
      </p>
      <section className="md:px-7 px-4 md:py-9 py-8 bg-primary-200 rounded-2xl md:w-auto w-full">
        <InputForm input={"Sign up"} onclick={() => signUpUser()} />

        <p className="w-full text-center text-base font-normal text-white">
          Already have an account?
          <Link className="text-secondary underline ml-1" to={"/signin"}>
            Log in
          </Link>
        </p>
      </section>
    </section>
  );
}
