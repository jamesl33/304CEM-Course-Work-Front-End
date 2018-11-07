import React from 'react'

const renderField = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
    <>
        <input {...input} style={{borderColor: touched && error ? 'red' : ''}} type={type} placeholder={placeholder}/>
        {touched && ((error && <span>{'* ' + error}</span>) || (warning && <span>{'* ' + warning}</span>))}
    </>
)

export { renderField }
