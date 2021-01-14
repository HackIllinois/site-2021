import React from 'react';

import Input from 'components/form/Input';
import Select from 'components/form/Select';
import states from 'data/states.json';
import countries from 'data/countries.json';
import styles from './styles.module.scss';

const locationOptions = states
  .concat(countries)
  .filter((place) => place !== 'United States') // removing US because we want people in the US to pick a state
  .concat('Other')
  .map((place) => ({ value: place, label: place }));

const genderOptions = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Non-Binary', value: 'Non-Binary' },
  { label: 'Prefer Not to Answer', value: 'Prefer Not to Answer' },
];

const PersonalInfo = (): JSX.Element => (
  <div>
    <h1 className={styles.title}>Personal Information</h1>
    <Input name="name" placeholder="Name" />
    <Input name="email" placeholder="Primary Email Address" />
    <Select
      name="location"
      options={locationOptions}
      placeholder="Where are you located this summer? *"
    />
    <Select
      name="gender"
      options={genderOptions}
      placeholder="Gender"
      creatable
    />
  </div>
);

export default PersonalInfo;
