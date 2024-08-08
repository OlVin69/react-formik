import { nanoid } from "nanoid";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ContactSchema from "../../../../schema";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), name: values.name, number: values.number });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field className={s.input} id={nameId} name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field className={s.input} id={numberId} name="number" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
