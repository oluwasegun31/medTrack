import { createContext, useRef, useState } from "react";

// Create a context for managing OTP (One-Time Password) state
export const OtpContext = createContext(null);
/**
 * Provider component for the OTP context.
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 */
export const OtpProvider = ({ children }) => {
  // Define state variables for OTP input, loading status, and error message
  const [isLoading, setIsLoading] = useState(false); // Loading indicator
  const [isError, setIsError] = useState(null); // Error message
  const [otpField, setOtpField] = useState(["", "", "", "", ""]); // Array to store OTP digits

  // Create a ref to hold references to all OTP input fields
  const otpInputs = useRef([]);

  // Return the context provider with state values
  return (
    <OtpContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        otpField,
        setOtpField,
        otpInputs,
      }}
    >
      {children}
    </OtpContext.Provider>
  );
};
