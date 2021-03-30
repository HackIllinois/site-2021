import React from 'react';

import styles from './styles.module.scss';

const eventTypes = [
  ['#EE6C72', 'Talks'],
  ['#FBB63B', 'General Event Stuff'],
  ['#2C9C98', 'Workshops'],
  ['#6F8CC1', 'Mini Events'],
];

const Guide: React.FC = () => (
  <div className={styles.guide}>
    <h1>Guide</h1>
    {eventTypes.map((event) => (
      <div className={styles.eventType} key={event[1]}>
        <span className={styles.colorTag} style={{ backgroundColor: event[0] }} />
        <span className={styles.textTag}>{event[1]}</span>
      </div>
    ))}
  </div>
);

export default Guide;
