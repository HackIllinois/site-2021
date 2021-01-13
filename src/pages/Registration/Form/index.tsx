import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registrationSchema, RegistrationSchema, errorMap } from '../validation';
import Welcome from './pages/Welcome';
import PersonalInfo from './pages/PersonalInfo';
import styles from './styles.module.scss';

type FormProps = {
  formIndex: number
};

// const fields = [
//   [],
//   ['name', 'email', ]
// ]

const Form = ({ formIndex }: FormProps): JSX.Element => {
  const methods = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema, { errorMap }),
  });
  const { handleSubmit, getValues } = methods;

  const onSubmit: SubmitHandler<RegistrationSchema> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<RegistrationSchema> = (errorData) => {
    console.log(errorData);
    console.log(getValues());
  };

  const pages = [Welcome, PersonalInfo];

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
        {pages.map((Page, i) => (
          <div style={{ display: formIndex === i ? 'block' : 'none' }}>
            <Page />
          </div>
        ))}

        <input type="submit" className={styles.submitButton} />
      </form>
    </FormProvider>
  );
};

export default Form;
