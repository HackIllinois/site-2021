import React from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import styles from './styles.module.scss';
import ErrorMessage from '../ErrorMessage';

type PropTypes = {
  name: string,
  className?: string;
  [key: string]: any;
};

const Input = ({ name, className, ...props }: PropTypes): JSX.Element => {
  const { register } = useFormContext();

  return (
    <>
      <input type="text" name={name} className={clsx(styles.input, className)} {...props} ref={register} />
      <ErrorMessage name={name} />
    </>
  );
};

export default Input;
