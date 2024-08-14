import { nanoid } from "nanoid";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ContactSchema from "../../../../schema";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  phone: "",
};

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id:nanoid(),
      name:values.name,
      phone:values.phone
    }
    onAdd(newContact);
    actions.resetForm();
    
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      
        <Form className={s.form}>
          <div className={s.input}>
            <label htmlFor={nameId}>Name</label>
            <Field className={s.field} id={nameId} name="name" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div className={s.input}>
            <label htmlFor={phoneId}>Phone</label>
            <Field className={s.field} id={phoneId} name="phone" />
            <ErrorMessage name="phone" component="span" />
          </div>
          <button className={s.button} type="submit" >
             Add contact
          </button>
        </Form>
   
    </Formik>
  );
};

export default ContactForm;
