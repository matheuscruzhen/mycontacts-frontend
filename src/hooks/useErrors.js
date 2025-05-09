import { useState, useCallback } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(
    ({ field, message }) => {
      const errorAlreadyExists = errors.find((error) => error.field === field);

      if (errorAlreadyExists) return;

      setErrors((prevState) => [...prevState, { field, message }]);
    },
    [errors]
  );

  const removeError = useCallback((fieldname) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldname)
    );
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldname) => errors.find((error) => error.field === fieldname)?.message,
    [errors]
  );

  return { errors, setError, removeError, getErrorMessageByFieldName };
}
