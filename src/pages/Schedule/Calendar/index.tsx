/* eslint-disable */
import React from 'react';

import Days from './Days';
import styles from './styles.module.scss';

type Props = {
  date: number,
  setDate: React.Dispatch<React.SetStateAction<number>>,
};

const Calendar = ({ date, setDate }: Props): JSX.Element => (
  <div className={styles.calendar}>
    <h1>April</h1>
    <table>
      <Days date={date} setDate={setDate} />
    </table>
  </div>
);

export default Calendar;