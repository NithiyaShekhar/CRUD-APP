import * as yup from 'yup';
export const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    age: yup.number().required('Age is required').positive('Age must be a positive number'),
    location: yup.string().required('Location is required'),
});