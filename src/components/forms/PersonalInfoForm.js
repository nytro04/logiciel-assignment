import React from "react";

import TextInput from "./TextInput";

const PersonalInfoForm = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  handleError,
}) => {
  return (
    <div>
      <h1>Personal Information</h1>

      <TextInput
        type="text"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={touched.name && !errors.name ? true : false}
        isInvalid={!!errors.name ? true : false}
        // renderErrorText={handleError(errors.name, touched.name)}
      />
      <TextInput
        type="checkbox"
        name="gender"
        placeholder="Gender"
        value={values.gender}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={touched.gender && !errors.gender ? true : false}
        isInvalid={!!errors.gender ? true : false}
        // renderErrorText={handleError(errors.gender, touched.gender)}
      />

      <TextInput
        type="text"
        name="contact"
        placeholder="Contact"
        value={values.contact}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={touched.contact && !errors.contact ? true : false}
        isInvalid={!!errors.contact ? true : false}
        // renderErrorText={handleError(errors.contact, touched.contact)}
      />

      <TextInput
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={touched.email && !errors.email ? true : false}
        isInvalid={!!errors.email ? true : false}
        // renderErrorText={handleError(errors.email, touched.email)}
      />
      <TextInput
        type="text"
        name="ghPostNumber"
        placeholder="Ghana Post Number"
        value={values.ghPostNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={touched.ghPostNumber && !errors.ghPostNumber ? true : false}
        isInvalid={!!errors.ghPostNumber ? true : false}
        // renderErrorText={handleError(errors.ghPostNumber, touched.ghPostNumber)}
      />

      <div className="text-right">
        <button type="submit" className="btn btn-primary">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
