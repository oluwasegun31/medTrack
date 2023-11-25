import { createContext, useRef, useState } from "react";

export const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [formErr, setFormErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
