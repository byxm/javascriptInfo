import { useState, useCallback } from "react";

const useForm = (initialValue, validation) => {
  const [value, setFieldsValue] = useState(initialValue);
  const [error, setError] = useState({});

  const setValue = useCallback((field, val) => {
    setFieldsValue((preVal) => ({
      ...preVal,
      [field]: val,
    }));
    setError((err) => ({
      ...err,
      [field]: validation[field](val) || null,
    }));
  }, []);

  const reset = useCallback(() => {
    setFieldsValue(initialValue);
  }, [initialValue]);

  return {
    value,
    error,
    setValue,
    reset
  };
};

export default useForm;
