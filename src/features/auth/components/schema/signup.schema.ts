import * as yup from 'yup'

export const signupSchema = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  company: yup.string().required('Company is required'),
  company2: yup.string().required('Company is required'),
  role: yup.string().required('Role is required'),
  zip: yup.string().required('Zip is required'),
  password: yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm your password'),
})
