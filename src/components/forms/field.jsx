import React from 'react'

const renderField = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
    <div>
        <input {...input} type={type} placeholder={(touched && ((error) || (warning))) || placeholder}/>
    </div>
)

export { renderField }
