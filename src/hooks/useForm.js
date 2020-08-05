import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(oEvent) {
    setValues({
      ...values,
      [oEvent.target.getAttribute('name')]: oEvent.target.value,
    });
  }

  function clearForm() {
    setValues(initialValues);
  }
  return {
    values,
    setValue,
    clearForm,
  };
}

export default useForm;
