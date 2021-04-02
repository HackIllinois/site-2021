import React from 'react';

import styles from './styles.module.scss';

const eventTypes = [
  ['#FBB63B', 'General Event Stuff'],
  ['#EE6C72', 'Talks'],
  ['#6F8CC1', 'Mini Events'],
  ['#2C9C98', 'Workshops'],
];

const Guide: React.FC = () => (
  <div className={styles.guide}>
    <h1>Guide</h1>
    <div className={styles.gridContainer}>
      {eventTypes.map((event) => (
        <div className={styles.eventType} key={event[1]}>
          <span className={styles.colorTag} style={{ backgroundColor: event[0] }} />
          <span className={styles.textTag}>{event[1]}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Guide;
