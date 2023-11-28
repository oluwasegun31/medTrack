import { Outlet, useNavigate } from "react-router-dom";
/**
 * RootLayout component serves as the main layout for the application.
 * It includes a navigation header and renders the content of the current route.
 * @component
 * @returns {JSX.Element} JSX element representing the RootLayout.
 */
export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <>
      <header className="md:px-0 px-4">
        <nav className="w-full max-w-[1440px] mx-auto flex md:justify-between justify-center items-center px-4 py-6 md:border-b-0 border-b border-b-primary-100">
          <section
            className="flex justify-start items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M14 14V3.5"
                stroke="#ED66B9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.0893 8.75L4.91113 19.25"
                stroke="#ED66B9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.67511 15.925C3.55574 15.2904 3.49714 14.6458 3.50011 14C3.49872 11.8285 4.17136 9.71002 5.42519 7.93703C6.67902 6.16403 8.45223 4.8239 10.5001 4.10156V11.9766L3.67511 15.925Z"
                stroke="#ED66B9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.9996 3.5C15.8395 3.50021 17.647 3.98386 19.2411 4.90251C20.8352 5.82116 22.16 7.14256 23.0826 8.73434C24.0053 10.3261 24.4935 12.1324 24.4984 13.9723C24.5032 15.8121 24.0246 17.621 23.1103 19.2176C22.1961 20.8142 20.8783 22.1426 19.2891 23.0697C17.6998 23.9967 15.8949 24.4899 14.0551 24.4998C12.2152 24.5098 10.4051 24.0361 8.80594 23.1262C7.20679 22.2164 5.87479 20.9023 4.94336 19.3156"
                stroke="#ED66B9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[20px] text-white font-[700] leading-7">
              MedTracker
            </p>
          </section>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
