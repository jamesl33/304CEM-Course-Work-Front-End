import React from 'react'

const renderInput = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
    <>
        <input {...input} style={{borderColor: touched && error ? 'red' : ''}} type={type} placeholder={placeholder}/>
        {touched && ((error && <span>{'* ' + error}</span>) || (warning && <span>{'* ' + warning}</span>))}
    </>
)

const renderTextarea = ({input, placeholder, rows, meta: { touched, error, warning }}) => (
    <>
        <textarea {...input} style={{borderColor: touched && error ? 'red' : ''}} placeholder={placeholder} rows={rows}/>
        {touched && ((error && <span>{'* ' + error}</span>) || (warning && <span>{'* ' + warning}</span>))}
    </>
)

const renderFileInput = (field) => {
    delete field.input.value
    return <input type="file" accept="image/*" {...field.input} />
}

export { renderInput, renderTextarea, renderFileInput }
