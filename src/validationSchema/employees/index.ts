import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  hours: yup.number().integer().required(),
  vacations: yup.number().integer().required(),
  user_id: yup.string().nullable(),
});
