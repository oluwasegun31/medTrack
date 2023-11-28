import { createContext, useRef, useState } from "react";

/**
 * Context to manage form-related state and references.
 * @property {Object} emailRef - Reference to the email input field.
 * @property {Object} passwordRef - Reference to the password input field.
 * @property {string | null} formErr - State to manage form-related errors.
 * @property {function} setFormErr - Function to set the formErr state.
 * @property {boolean} isLoading - State to manage the loading status of the form.
 * @property {function} setIsLoading - Function to set the isLoading state.
 */
export const FormContext = createContext(null);
/**
 * Context provider for managing form-related state and references.
 * @component
 * @param {Object} props - React component properties.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} JSX element representing the FormProvider.
 */
export const FormProvider = ({ children }) => {
  // Create refs to the email and password input fields
  const emailRef = useRef();
  const passwordRef = useRef();

  // Create state variables to manage form error and loading status
  const [formErr, setFormErr] = useState(null); // Stores form error message
  const [isLoading, setIsLoading] = useState(false); // Indicates whether the form is loading

  // Return a context provider that exposes the form-related information
  return (
    <FormContext.Provider
      value={{
        emailRef,
        passwordRef,
        formErr,
        setFormErr,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
