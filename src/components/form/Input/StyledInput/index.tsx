import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './styles.module.scss';

type PropTypes = {
  className?: string;
  multiline?: boolean;
  [key: string]: unknown;
};

const StyledInput = forwardRef<HTMLInputElement|HTMLTextAreaElement, PropTypes>(({ className, multiline, ...props }: PropTypes, ref): JSX.Element => (
  multiline ? (
    <textarea className={clsx(styles.input, styles.multiline, className)} {...props} ref={ref as React.Ref<HTMLTextAreaElement>} />
  ) : (
    <input className={clsx(styles.input, className)} {...props} ref={ref as React.Ref<HTMLInputElement>} />
  )
));

export default StyledInput;
