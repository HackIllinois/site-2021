import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import PROJECTOR from 'assets/registration/projector.svg';
import NextButton from 'components/form/NextButton';
import { registrationSchema, RegistrationSchema, errorMap, defaultValues } from '../validation';
import Welcome from './screens/Welcome';
import PersonalInfo from './screens/PersonalInfo';
import RaceDemographics from './screens/RaceDemographics';
import Education from './screens/Education';
import Experience from './screens/Experience';

import styles from './styles.module.scss';
import Finish from './screens/Finish';

type FormProps = {
  formIndex: number,
  setFormIndex: any,
};

const fields: (keyof RegistrationSchema)[][] = [
  [],
  ['firstName', 'lastName', 'email', 'location', 'gender'],
  ['race'],
  ['degreePursued', 'graduationYear', 'school', 'major'],
  ['programmingYears', 'programmingAbility', 'hasInternship', 'resumeFilename'],
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

  const pages = [Welcome, PersonalInfo, RaceDemographics, Education, Experience, Finish];

  return (
    <div className={styles.container} style={{ backgroundImage: `url("${PROJECTOR}")` }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
          {pages.map((Page, i) => (
            <div style={{ display: formIndex === i ? 'block' : 'none', height: '100%' }}>
              <Page />
            </div>
          ))}
          {/* {(formIndex !== 5) && <NextButton isSubmit={formIndex === 4} setFormIndex={setFormIndex} />} */}
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
