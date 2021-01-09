/* eslint-disable */
import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import * as z from 'zod';

import Welcome from './pages/Welcome';
import PersonalInfo from './pages/PersonalInfo';

import styles from './styles.module.scss';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  location: z.string(),
  timezone: z.string(),
  gender: z.string().optional(),
  race: z.string().array().optional(),
  degreePursued: z.enum(['ASSOCIATES', 'BACHELORS', 'MASTERS', 'PHD', 'GRADUATED', 'OTHER']),
  graduationYear: z.number().int(),
  school: z.string(),
  major: z.string(),
  programmingYears: z.number().int().min(0).max(10),
  programmingAbility: z.number().int().min(1).max(5),
  hasInternship: z.boolean(),
  resumeFilename: z.string().optional(),
  terms: z.boolean().refine((val: boolean) => val),
});

type Schema = z.infer<typeof schema>;

type FormProps = {
  formIndex: number
};

// const fields = [
//   [],
//   ['name', 'email', ]
// ]

const Form = ({ formIndex }: FormProps): JSX.Element => {
  const { register, handleSubmit, watch, errors } = useForm<Schema>();

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<Schema> = (errors) => {
    Object.keys(errors);
    console.log(errors);
  }

  const pages = [Welcome, PersonalInfo];

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
      {pages.map((Page, i) => (
        <div style={{ display: formIndex === i ? "block" : "none" }}>
          <Page errors={errors} register={register} />
        </div>
      ))}

      <input type="submit" />
    </form>
  );
};

export default Form;
