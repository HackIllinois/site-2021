/* eslint-disable */
import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

import styles from './styles.module.scss';

type FormProps = {
  formIndex: string
};

type Inputs = {
  name: string,
  email: string,
  location: string,
  timeZone: string,
  gender: string,
};

const Form = ({ formIndex }: FormProps) => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => {
    console.log(errors);
  }

  const pages = [Welcome, PersonalInfo];

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
      {pages.map((Page, i) => (
        <Page show={formIndex === i} />
      ))}
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <div style={{ display: formIndex === "1" ? "block" : "none" }}>
        <>
          {/* register your input into the hook by invoking the "register" function */}
          <input name="name" defaultValue="test" ref={register} />

          {/* include validation with required or other standard HTML validation rules */}
          <input name="email" ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This field is required</span>}
        </>
      </div>

      <input type="submit" />
    </form>
  );
};

export default Form;
