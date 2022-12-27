import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { nanoid } from 'nanoid';
import styled from 'styled-components';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  number: yup.string().required().min(10),
});

const FormStyled = styled(Form)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const Lable = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

class ContactsForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleStateChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (value, { resetForm }) => {
    this.props.onSubmit(value, nanoid());
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.handleSubmit}
        validationSchema={schema}
      >
        <FormStyled autoComplete="off" onChange={this.handleStateChange}>
          <Lable htmlFor="name">
            <Typography
              variant="h5"
              variantMapping={{ h2: 'h5' }}
              gutterBottom
              align="center"
            >
              Full Name
            </Typography>
          </Lable>
          <Field
            id="name"
            name="name"
            placeholder="Jane Franklin"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
          <Lable htmlFor="number">
            <Typography
              variant="h5"
              variantMapping={{ h2: 'h5' }}
              gutterBottom
              align="center"
            >
              Number
            </Typography>
          </Lable>
          <Field
            id="number"
            placeholder="050 442 12 34"
            type="tel"
            name="number"
            required
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component="div" />
          <Button variant="contained" size="small" type="submit">
            Add contact
          </Button>
        </FormStyled>
      </Formik>
    );
  }
}

export default ContactsForm;
