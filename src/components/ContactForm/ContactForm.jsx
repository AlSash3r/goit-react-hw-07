import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const startValues = {
  name: "",
  number: "",
};

const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
const onlyNumbers = /^[0-9]+$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .matches(onlyLetters, "Only Letters")
    .required("Required")
    .trim(),
  number: Yup.string()
    .matches(onlyNumbers, "Only Numbers")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Required"),
});

export default function ContactForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        ...values,
      })
    );
    actions.resetForm();
  };

  return (
    <section className={s.formWrapper}>
      <Formik
        initialValues={startValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        {() => (
          <Form className={s.form}>
            <div className={s.formFields}>
              <label htmlFor={`${fieldId}-name`} className={s.label}>
                Name
                <Field
                  className={s.input}
                  type="text"
                  name="name"
                  id={`${fieldId}-name`}
                />
              </label>
              <ErrorMessage
                className={s.errorMessage}
                name="name"
                component="div"
              />
            </div>

            <div className={s.formFields}>
              <label htmlFor={`${fieldId}-number`} className={s.label}>
                Number
                <Field
                  className={s.input}
                  type="tel"
                  name="number"
                  id={`${fieldId}-number`}
                />
              </label>
              <ErrorMessage
                className={s.errorMessage}
                name="number"
                component="div"
              />
            </div>

            <button className={s.submitButton} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
