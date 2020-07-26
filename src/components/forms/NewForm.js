import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Card, CardContent, FormControlLabel, Radio } from "@material-ui/core";
import { TextField, RadioGroup } from "formik-material-ui";

class NewForm extends Component {
  render() {
    const initialValues = {
      name: "",
      gender: "",
      contact: "",
      email: "",
      ghPostNumber: "",
    };

    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(100, "Names must not be more 100 characters")
        .required("Name is required"),
      gender: Yup.string().required("Name is required"),
      contact: Yup.string()
        .min(10, "Phone number must be at least 10 characters")
        .max(10, "Phone number must not be more 10 characters")
        .required("Contact number is required"),
      email: Yup.string()
        .email("Must be a valid email address")
        .max(100, "Email must be less than 100 characters")
        .required("Email is required"),
      ghPostNumber: Yup.string().required("Ghana Post number is required"),
    });

    return (
      <Card>
        <CardContent>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={() => {}}
          >
            <Form autoComplete="off">
              <Field
                name="name"
                component={TextField}
                label="Full Name"
              ></Field>
              <Field type="radio" component={RadioGroup} name="gender">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </Field>
              <Field
                name="contact"
                component={TextField}
                label="Contact"
              ></Field>
              <Field
                name="email"
                type="email"
                component={TextField}
                label="Email"
              ></Field>
              <Field
                name="ghPostNumber"
                component={TextField}
                label="Ghana Post Number"
              ></Field>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    );
  }
}

export default NewForm;
