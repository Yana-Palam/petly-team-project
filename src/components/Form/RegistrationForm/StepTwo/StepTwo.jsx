import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { Form } from '../RegistrationForm.styled';
import { AuthBtn, BackBtn } from '../RegistrationForm.styled';
import { InputWrp } from 'components/Form/LoginForm/LoginForm.styled';

const StepTwo = ({ next, data, prev }) => {
  const cityRegex = /^(\w+(,)\s*)+\w+$/;
  const phoneRegex = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

  const stepTwoValidationSchema = yup.object().shape({
    name: yup.string().required(),
    city: yup
      .string()
      .required()
      .matches(cityRegex, 'Error. Example: Brovary, Kyiv'),
    phone: yup
      .string()
      .required()
      .max(13)
      .matches(phoneRegex, 'Phone number is not valid'),
  });
  const formik = useFormik({
    initialValues: data,
    validationSchema: stepTwoValidationSchema,

    onSubmit: event => {
      const name = event.name;
      const city = event.city;
      const phone = event.phone;
      next({ name, city, phone }, true);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputWrp>
        <TextField
          type="text"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          variant="outlined"
        />
        <TextField
          type="text"
          name="city"
          label="City, region"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          variant="outlined"
        />
        <TextField
          type="phone"
          name="phone"
          label="Mobile phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          variant="outlined"
        />
      </InputWrp>
      <InputWrp>
        <AuthBtn type="submit">Register</AuthBtn>
        <BackBtn type="button" onClick={() => prev(formik.values)}>
          Back
        </BackBtn>
      </InputWrp>
    </Form>
  );
};

export default StepTwo;