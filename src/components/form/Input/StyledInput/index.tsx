import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './styles.module.scss';

type PropTypes = {
  className?: string;
  multiline?: boolean;
  [key: string]: unknown;
};

// Adapted from https://stackoverflow.com/a/46777664
const adjustHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const textarea = e.target;
  textarea.style.height = '';
  textarea.style.height = `${textarea.scrollHeight}px`;
};

const StyledInput = forwardRef<HTMLInputElement|HTMLTextAreaElement, PropTypes>(({ className, multiline, ...props }: PropTypes, ref): JSX.Element => (
  multiline ? (
    <textarea className={clsx(styles.input, styles.multiline, className)} {...props} onChange={adjustHeight} ref={ref as React.Ref<HTMLTextAreaElement>} />
  ) : (
    <input className={clsx(styles.input, className)} {...props} ref={ref as React.Ref<HTMLInputElement>} />
  )
));

export default StyledInput;
