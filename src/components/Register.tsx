import React from 'react';
import { useFormik } from 'formik';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

function Register() {
    const validate = (values: FormValues) => {
        const errors: Partial<FormValues> = {};
        if (!values.firstName) {
            errors.firstName = 'First name Required.';
        } else if (values.firstName.length > 15) {
            errors.firstName = 'First name may not be longer than 15 characters long.';
        }
        if (!values.lastName) {
            errors.lastName = 'Last Name Required.';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Last name may not be longer than 20 characters long.';
        }
        if (!values.email) {
            errors.email = 'Required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address.';
        }
        let passwordErrorMessage = '';
        if (!values.password) {
            passwordErrorMessage += 'Password is required.\n';
        }
        if (values.password.length < 8) {
            passwordErrorMessage += 'Password must contain at least 8 characters.\n';
        }
        if (!/[A-Z]/.test(values.password)) {
            passwordErrorMessage += 'Password must contain at least one uppercase letter.\n';
        }
        if (!/[a-z]/.test(values.password)) {
            passwordErrorMessage += 'Password must contain at least one lowercase letter.\n';
        }
        if (!/\d/.test(values.password)) {
            passwordErrorMessage += 'Password must contain at least one number.\n';
        }
        if (!/[@$!%*?&]/.test(values.password)) {
            passwordErrorMessage += 'Password must contain at least one special character.\n';
        }
        if (passwordErrorMessage) {
            errors.password = passwordErrorMessage;
        }
        return errors;
    };
    const formik = useFormik<FormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="register-form">
    <h2>Register</h2>
    <div className="register-container">
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName && <i>{formik.errors.firstName}</i>}
    </div>
    <div className="register-container">
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName && <i>{formik.errors.lastName}</i>}
    </div>
    <div className="register-container">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && <i>{formik.errors.email}</i>}
    </div>
    <div className="register-container">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && <i>{formik.errors.password}</i>}
    </div>
    <button type="submit" className="register-button">Register</button>
  </form>
    );
}
export default Register;
