import React from 'react';
import { useFormContext } from 'react-hook-form';

import ErrorMessage from '../ErrorMessage';
import StyledInput from './StyledInput';

type PropTypes = {
  name: string,
  multiline?: boolean;
  [key: string]: unknown;
};

const Input = ({ name, multiline, ...props }: PropTypes): JSX.Element => {
  const { register } = useFormContext();

  return (
    <>
      <StyledInput type="text" name={name} multiline={multiline} {...props} ref={register} />
      <ErrorMessage name={name} />
    </>
  );
};

export default Input;
