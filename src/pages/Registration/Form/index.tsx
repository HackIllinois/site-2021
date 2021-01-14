import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import NextButton from 'components/form/NextButton';
import { registrationSchema, RegistrationSchema, errorMap, defaultValues } from '../validation';
import Welcome from './pages/Welcome';
import PersonalInfo from './pages/PersonalInfo';
import RaceDemographics from './pages/RaceDemographics';
import Education from './pages/Education';
import styles from './styles.module.scss';

type FormProps = {
  formIndex: number,
  setFormIndex: any,
};

const fields: (keyof RegistrationSchema)[][] = [
  [],
  ['name', 'email', 'location', 'gender'],
  ['race'],
  ['degreePursued'],
  [],
];

const Form = ({ formIndex, setFormIndex }: FormProps): JSX.Element => {
  const methods = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema, { errorMap }),
    defaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<RegistrationSchema> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<RegistrationSchema> = (errorData) => {
    // going through the fields in reverse in order to jump back to first page with errors
    fields.reverse().forEach((page, pageIndex) => {
      page.forEach((field) => {
        if (errorData[field]) {
          setFormIndex((fields.length - 1) - pageIndex);
        }
      });
    });
  };

  const pages = [Welcome, PersonalInfo, RaceDemographics, Education];

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
        {pages.map((Page, i) => (
          <div style={{ display: formIndex === i ? 'block' : 'none' }}>
            <Page />
          </div>
        ))}
        {(formIndex !== 5) && <NextButton isSubmit={formIndex === 4} setFormIndex={setFormIndex} />}
      </form>
    </FormProvider>
  );
};

export default Form;
