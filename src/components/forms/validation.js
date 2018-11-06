const required = value => value ? undefined : 'Required'

const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined

const passwordsMatch = (value, allValues) => value !== allValues.userPassword ? 'Passwords do not match' : undefined

export { email, passwordsMatch, required }
