import { createFormContext } from '~/context/FormContext';

const [FormContextProvider, useFormContext, useForm] = createFormContext();

function AnotherComponent() {
  const { handleChange, values } = useFormContext();
  return (
    <>
      <h1>AnotherComponent</h1>
      <input type='text' name='baz' value={values.baz} onChange={handleChange} />
      <input type='text' name='faz' value={values.faz} onChange={handleChange} />
    </>
  );
}

export function Form() {
  const form = useForm();

  const handleSubmit = (values: any) => {
    console.log('handleSubmit', values);
  };
  return (
    <FormContextProvider form={form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <h1>Form</h1>
        <input type='text' name='foo' value={form.values.foo} onChange={form.handleChange} />
        <input type='text' name='bar' value={form.values.bar} onChange={form.handleChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
      <AnotherComponent />
    </FormContextProvider>
  );
}
