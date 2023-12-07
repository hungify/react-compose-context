import React, { useCallback } from 'react';

interface FormState {
  foo: string;
  bar: string;
  baz: string;
  faz: string;
}

interface FormContext {
  values: FormState;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (cb: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined) => void;
}

interface FormContextProviderProps {
  form: FormContext;
  children: React.ReactNode;
}

export function createFormContext() {
  const FormContext = React.createContext<FormContext>({
    values: {
      foo: '',
      bar: '',
      baz: '',
      faz: '',
    },
    handleChange: () => void 0,
    handleSubmit: () => undefined,
  });

  const FormContextProvider = ({ children, form }: FormContextProviderProps) => {
    return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
  };

  function useFormContext() {
    const context = React.useContext(FormContext);

    if (!context) {
      throw new Error('useFormContext must be used within a FormContextProvider');
    }
    return context;
  }

  return [FormContextProvider, useFormContext, useForm] as const;
}

export function useForm() {
  const [values, setValues] = React.useState<FormState>({
    foo: '',
    bar: '',
    baz: '',
    faz: '',
  });

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (cb: any) => {
      cb(values);
    },
    [values],
  );

  return { values, handleChange, handleSubmit };
}
