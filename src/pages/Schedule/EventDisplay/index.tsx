import React from 'react';

import Events from './Events';

import styles from './styles.module.scss';

type Props = {
  date: number,
  width: number
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const EventDisplay = ({ date, width }: Props): JSX.Element => {
  const d = new Date(`April ${date}, 2021`);
  const day = days[d.getDay()];

  return (
    <div className={styles.eventDisplay}>
      {width > 950 ? (
        <h1 className={styles.dayHeading}>April {date} - {day} (All times are in CDT)</h1>
      ) : (
        <h1 className={styles.dayHeading}>April {date}<br />(All times are in CDT)</h1>
      )}
      <Events date={date} />
    </div>
  );
};

export default EventDisplay;
