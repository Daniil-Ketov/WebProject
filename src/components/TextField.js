import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './Modal.css'
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="textS" >
      <label htmlFor={field.name}>{label}</label>
      <input
          type="text"
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
