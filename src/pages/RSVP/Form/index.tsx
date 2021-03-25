import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { useForm, SubmitHandler, SubmitErrorHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DateTime } from 'luxon';

import PROJECTOR from 'assets/registration/projector.svg';
import Input from 'components/form/Input';
import Select from 'components/form/Select';
import Button from 'components/form/Button';
import Constant from 'components/form/Constant';
import Random from 'components/form/Random';
import { createProfile, getRegistration, refreshToken, rsvp, getRoles, getProfile } from 'util/api';
import { RegistrationType, WithId } from 'util/types';
import DISCORD_HELP from 'assets/discord_username_how_to.png';

import styles from './styles.module.scss';
import { rsvpSchema, RSVPSchema, errorMap, defaultValues } from '../validation';
import interests from './interests.json';

const NUM_PROFILE_PICTURES = 11;
const getProfilePicture = (index: number) => ((index >= 0 && index < NUM_PROFILE_PICTURES)
  ? `https://hackillinois-upload.s3.amazonaws.com/photos/profiles-2021/profile-${index}.png`
  : ''
);

const capitalSnakeCase = (str: string) => str.toUpperCase().replace(/ /g, '_');
const teamStatusOptions = ['Looking for Team', 'Looking for Members', 'Not Looking'].map((label) => ({ label, value: capitalSnakeCase(label) }));
const interestOptions = Object.values(interests)
  .flat()
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  .map((value) => ({ label: value, value }));

const Form = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [registration, setRegistration] = useState<WithId<RegistrationType> | null>(null);

  const methods = useForm<RSVPSchema>({
    resolver: zodResolver(rsvpSchema, { errorMap }),
    defaultValues,
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    const initialize = async () => {
      const roles = await getRoles();
      if (roles.includes('Applicant')) {
        const registrationData = await getRegistration('attendee');
        setRegistration(registrationData);

        if (roles.includes('Attendee')) {
          setIsEditing(true);
          const { id, points, ...profileData } = await getProfile();
          methods.reset(profileData);
        }
      } else { // user hasn't registered yet
        // TODO: maybe display message or redirect to registration page?
      }
    };

    initialize().finally(() => setIsLoading(false));
  }, []); // deliberately not including `methods`

  const onSubmit: SubmitHandler<RSVPSchema> = async (data) => {
    console.log('success', data);
    try {
      await Promise.all([
        rsvp(isEditing, { isAttending: true }).then(() => refreshToken()),
        createProfile(isEditing, data),
      ]);
    } catch (e) {
      console.log(e);
      alert('There was an error while submitting. If this error persists, please email contact@hackillinois.org');
    }
  };

  const onError: SubmitErrorHandler<RSVPSchema> = (errors) => {
    console.log('error', errors);
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url("${PROJECTOR}")` }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
          <Scrollbars>
            <div className={styles.screenContainer}>
              <div className={styles.title}>RSVP</div>
              <Constant name="firstName" value={registration?.firstName} />
              <Constant name="lastName" value={registration?.lastName} />
              <Constant name="timezone" value={DateTime.local().toFormat('ZZZZ', { locale: 'en-US' })} />
              <Random name="avatarUrl" seed={registration?.id} min={0} max={NUM_PROFILE_PICTURES} generateValue={getProfilePicture} />
              <Input name="discord" placeholder="Discord Username *" helpLink={DISCORD_HELP} />
              <Select name="teamStatus" placeholder="Team Status *" options={teamStatusOptions} />
              <Select name="interests" placeholder="Interests" options={interestOptions} isMulti />
              <Input name="description" placeholder="Bio" multiline rows="2" maxlength="400" />
            </div>
          </Scrollbars>

          <div className={styles.buttons}>
            {isLoading && <Button loading>Loading...</Button>}
            {!isLoading && <Button type="submit">Submit</Button>}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
