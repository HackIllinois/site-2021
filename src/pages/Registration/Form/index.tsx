import React from 'react';
import clsx from 'clsx';
import { useForm, SubmitHandler, SubmitErrorHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import PROJECTOR from 'assets/registration/projector.svg';
import Button from 'components/form/Button';
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
  setFormIndex: React.Dispatch<React.SetStateAction<number>>,
};

const fields: (keyof RegistrationSchema)[][] = [
  [],
  ['name', 'email', 'location', 'timezone', 'gender'],
  ['race'],
  ['degreePursued', 'graduationYear', 'school', 'major'],
  ['programmingYears', 'programmingAbility', 'hasInternship', 'resumeFilename'],
  [],
];

const pages = [Welcome, PersonalInfo, RaceDemographics, Education, Experience, Finish];
const submitPageIndex = pages.length - 2;

const Form = ({ formIndex, setFormIndex }: FormProps): JSX.Element => {
  const methods = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema, { errorMap }),
    defaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<RegistrationSchema> = (data) => {
    console.log(data);
    setFormIndex(pages.length - 1);
  };

  const onError: SubmitErrorHandler<RegistrationSchema> = (errorData) => {
    console.log(errorData);
    for (let i = 0; i < fields.length; i += 1) {
      if (fields[i].some((field) => errorData[field])) {
        console.log(methods.getValues());
        setFormIndex(i);
        return;
      }
    }
  };

  const nextPage = () => setFormIndex((current) => current + 1);
  const previousPage = () => setFormIndex((current) => current - 1);

  return (
    <div className={styles.container} style={{ backgroundImage: `url("${PROJECTOR}")` }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
          {pages.map((Page, i) => (
            // the array should be constant, so using index as key is fine
            // eslint-disable-next-line react/no-array-index-key
            <div className={clsx(styles.screenContainer, formIndex === i && styles.visible)} key={i}>
              <Page />

              {formIndex !== pages.length - 1 && ( // last page does not have any buttons
                <div className={styles.buttons}>
                  <Button arrow="left" hidden={formIndex === 0} onClick={previousPage} />
                  <div className={styles.spacer} />
                  {(formIndex !== submitPageIndex) && <Button arrow="right" onClick={nextPage}>Next</Button>}
                  {(formIndex === submitPageIndex) && <Button type="submit">Submit</Button>}
                </div>
              )}
            </div>
          ))}
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
