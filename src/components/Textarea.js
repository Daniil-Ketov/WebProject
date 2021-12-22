import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './Modal.css'
export const Textarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div >
            <textarea
                {...field} {...props}
                autoComplete="off"
            />
        </div>
    )
}