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
import { FormProvider } from "./context";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signin">
          <Route
            index
            element={
              <FormProvider>
                <SigninPage />
              </FormProvider>
            }
          />
          <Route path="forgot-password" element={<ForgotPassword />} />
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
          <Route path="confirm-email" element={<ConfirmEmail />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
