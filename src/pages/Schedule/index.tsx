import React, { useState } from 'react';

import Background from './Background';
import Calendar from './Calendar';
import Guide from './Guide';
import EventDisplay from './EventDisplay';

import styles from './styles.module.scss';

const Schedule: React.FC = () => {
  const [date, setDate] = useState(7);

  return (
    <div className={styles.schedule}>
      <Background />
      <Calendar date={date} setDate={setDate} />
      <Guide />
      <EventDisplay date={date} />
    </div>
  );
};

export default Schedule;
