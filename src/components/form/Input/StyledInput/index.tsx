import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.scss';

type PropTypes = {
  className?: string;
  [key: string]: unknown;
};

const StyledInput = ({ className, ...props }: PropTypes): JSX.Element => (
  <input className={clsx(styles.input, className)} {...props} />
);

export default StyledInput;
