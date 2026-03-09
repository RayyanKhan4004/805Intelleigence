import * as yup from 'yup'

export const suscribePopUpSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .matches(/@/, 'Invalid email')
    .matches(/\.[a-zA-Z]{2,}/, 'Invalid email'),
  // password: yup.string().required('Password is required'),
  firstName : yup.string().required('First Name is required'),
  lastName : yup.string().required('Last Name is required'),
  phoneNumber : yup.string().required('Phone Number is required')

})
