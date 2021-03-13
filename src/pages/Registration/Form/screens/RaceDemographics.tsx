import React from 'react';
import clsx from 'clsx';

import Checkboxes from 'components/form/Checkboxes';
import styles from './styles.module.scss';

const raceOptions = [
  { label: 'American Indian or Alaskan Native', value: 'American Indian or Alaskan Native' },
  { label: 'Asian', value: 'Asian' },
  { label: 'Black or African American', value: 'Black or African American' },
  { label: 'Native Hawaiian or Pacific Islander', value: 'Native Hawaiian or Pacific Islander' },
  { label: 'Hispanic or Latino or Spanish Origin', value: 'Hispanic or Latino or Spanish Origin' },
  { label: 'White', value: 'White' },
  { label: 'Other', value: 'Other', isOther: true },
  { label: 'Prefer Not to Answer', value: 'Prefer Not to Answer', isRadio: true },
];

const RaceDemographics = (): JSX.Element => (
  <div className={clsx(styles.screen, styles.raceDemographics)}>
    <h1 className={styles.title}>Race Demographics</h1>
    <Checkboxes
      name="race"
      options={raceOptions}
    />
  </div>
);

export default RaceDemographics;
