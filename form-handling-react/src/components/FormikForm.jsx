import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username required"),
          email: Yup.string().required("Email required"),
          password: Yup.string().required("Password required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="container mx-auto p-6 flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                name="username"
                className="py-4 px-2 border border-blue-500 rounded-lg mb-4"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-center text-red-600"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                name="email"
                className="py-4 px-2 border border-blue-500 rounded-lg mb-4"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-center text-red-600"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                className="py-4 px-2 border border-blue-500 rounded-lg mb-4"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-center text-red-600"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 p-4 text-white rounded-lg"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
