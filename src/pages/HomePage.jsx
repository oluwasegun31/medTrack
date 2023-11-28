import { useNavigate } from "react-router-dom";
import landingImg from "../assets/landing-img.svg";
/**
 * HomePage component represents the landing page of the MedTracker application.
 * It includes a section with information and signup options for both patients and healthcare professionals.
 * @component
 * @returns {JSX.Element} JSX element representing the HomePage.
 */
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <section className="w-full h-[90vh] flex md:justify-start justify-center items-center md:p-6 p-4 xl:gap-x-20 gap-x-12">
      <aside className="w-[50%] h-full bg-tertiary-200 rounded-xl p-8 md:flex hidden flex-col justify-between items-center">
        <div className="text-[#AB387E] text-3xl font-normal w-full text-left">
          <p>Your Personal</p>
          <p>Medication Companion</p>
        </div>
        <img
          src={landingImg}
          alt="landing image"
          className="w-[70%] object-contain"
        />
      </aside>
      <aside className="flex flex-col justify-start items-start md:gap-14 gap-8 md:w-[50%] w-[339px] md:h-auto h-[351px] md:bg-transparent bg-primary-200 md:p-0 p-5 md:rounded-none rounded-lg">
        <div className="text-white md:text-[40px] text-[20px] font-bold leading-normal md:w-[85%] w-full">
          <p>Stay On Schedule:</p>
          <p>
            Manage Your Medications with
            <span className="text-tertiary-400 ml-2">MedTracker</span>
          </p>
        </div>
        <div className="w-full flex flex-col md:justify-start justify-center md:items-start items-center gap-6 text-primary-400 md:text-base text-sm font-bold xl:[&_button]:w-[470px] lg:[&_button]:w-[80%] [&_button]:w-full md:[&_button]:p-5 [&_button]:p-4 [&_button]:rounded-[36px] [&_button]:outline-none">
          <button
            className="bg-tertiary-200 "
            onClick={() =>
              navigate("/auth/signup", { state: { userType: "patient" } })
            }
          >
            Sign up as a Patient
          </button>
          <button
            className="bg-tertiary-400"
            onClick={() =>
              navigate("/auth/signup", {
                state: { userType: "healthProfessional" },
              })
            }
          >
            Sign up as an healthcare
          </button>
        </div>
      </aside>
    </section>
  );
}
