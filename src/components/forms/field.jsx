import React from 'react'

const renderField = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
    <div>
        <input {...input} type={type} placeholder={placeholder} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)

export { renderField }
