import React, { useState } from 'react';

import useWindowSize from 'util/useWindowSize';
import Background from './Background';
import Calendar from './Calendar';
import Guide from './Guide';
import EventDisplay from './EventDisplay';

import styles from './styles.module.scss';

const Schedule: React.FC = () => {
  const [date, setDate] = useState(7);
  const { width } = useWindowSize();

  return (
    <div className={styles.schedule}>
      <Background />
      <div className={styles.flexRow}>
        <div className={styles.left}>
          <Calendar date={date} setDate={setDate} width={width} />
          <Guide />
        </div>
        <div className={styles.right}>
          <EventDisplay date={date} width={width} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
