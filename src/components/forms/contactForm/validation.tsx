import { REGEX } from '../../../constants/validation';

export const contactFormValidation = values => {
  const errors: any = {};

  if (!values.name) {
    errors.name = 'Required Field';
  }

  if (!values.email) {
    errors.email = 'Required Field';
  } else if (!REGEX.EMAIL.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.comments && values.comments !== '') {
    errors.comments = 'Required Field';
  }

  return errors;
};
