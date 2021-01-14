import React from 'react';

import Input from 'components/form/Input';
import styles from './styles.module.scss';

const Education = (): JSX.Element => (
  <div>
    <h1 className={styles.title}>Personal Information</h1>
    <Input name="degreePursued" placeholder="Degree Pursued" />
  </div>
);

export default Education;
