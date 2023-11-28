import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import {
  ConfirmEmail,
  ForgotPassword,
  HomePage,
  SigninPage,
  SignupPage,
} from "./pages";
import RootLayout from "./layout/RootLayout";
import { FormProvider, OtpProvider } from "./context";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* Authentication routes sign up, login, confirm email, forgot password */}
        <Route path="auth">
          <Route path="signin">
            <Route
              index
              element={
                <FormProvider>
                  <SigninPage />
                </FormProvider>
              }
            />
            <Route
              path="forgot-password"
              element={
                <OtpProvider>
                  <ForgotPassword />
                </OtpProvider>
              }
            />
          </Route>
          <Route path="signup">
            <Route
              index
              element={
                <FormProvider>
                  <SignupPage />
                </FormProvider>
              }
            />
            <Route
              path="confirm-email"
              element={
                <OtpProvider>
                  <ConfirmEmail />
                </OtpProvider>
              }
            />
          </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
