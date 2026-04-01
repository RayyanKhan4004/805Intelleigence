import * as yup from 'yup'

export const forgetPasswordSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .matches(/@/, 'Invalid email')
    .matches(/\.[a-zA-Z]{2,}/, 'Invalid email'),
})