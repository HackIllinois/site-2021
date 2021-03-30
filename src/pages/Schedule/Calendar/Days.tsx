/* eslint-disable */
import React, { AriaAttributes, DOMAttributes } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Props = {
  date: number,
  setDate: React.Dispatch<React.SetStateAction<number>>,
};

const startDate = 7;
const endDate = 12;

const Days = ({ date, setDate }: Props): JSX.Element => {
  const changeDate = (d: number) => {
    if (d >= startDate && d <= endDate) setDate(d);
  }

  const daysInMonth = [];
  for (let i = 0; i < 4; i++) {
    daysInMonth.push(<td className={styles.empty} key={'startblank' + i}>{""}</td>);
  }
  for (let d = 1; d < 31; d++) {
    const currentDay = (d === date);
    const activeDay = (d >= startDate && d <= endDate);
    daysInMonth.push(
      <td
        className={clsx(styles.calendarDay, currentDay && styles.selectedDay, activeDay && styles.activeDay)} 
        key={d}
        data-active={activeDay && !currentDay ? 'yes' : 'no'}
      >
        <div onClick={() => changeDate(d)} >{d}</div>
      </td>
    );
  }
  daysInMonth.push(<td className={styles.empty} key={'endblank'}>{""}</td>);

  let rows: JSX.Element[][] = [];
  let cells: JSX.Element[] = [];
  daysInMonth.forEach((day, i) => {
    if (i % 7 !== 0) {
      cells.push(day);
      if (i === daysInMonth.length - 1) {
        rows.push(cells);
      }
    } else {
      rows.push(cells);
      cells = [];
      cells.push(day);
    }
  });

  return (
    <tbody>
      {rows.map((d, i) => {
        if (i > 1) return <tr key={'daysinmonth' + i}>{d}</tr>
      })}
    </tbody>
  )
};

export default Days;