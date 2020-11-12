import React from 'react';

import LANDSCAPE_CONT from 'assets/home/event_info/landscape_continued.svg';
import BLOB from 'assets/home/event_info/blob.svg';
import CAMPFIRE from 'assets/home/event_info/campfire.svg';

import styles from './styles.module.scss';

const EventInfo: React.FC = () => (
  <div className={styles.eventInfo}>
    <div className={styles.landscapeCont} style={{ backgroundImage: `url(${LANDSCAPE_CONT})` }} />
    <div className={styles.blob} style={{ backgroundImage: `url(${BLOB})` }} />
    <div className={styles.campfire} style={{ backgroundImage: `url(${CAMPFIRE})` }} />
    <div className={styles.textContainer}>
      <h1>THE EVENT</h1>
      <p className={styles.firstp}>HackThis is a fully virtual, education focused hackathon.</p>
      <h1>JOIN US</h1>
      <p className={styles.firstp}>Follow us on Twitter (@HackIllinois) </p>
      <p>In terms of the platforms you will need to have access to</p>
      <h2>Twitter</h2>
      <p className={styles.firstp}>This is where we’ll be posting main updates</p>
      <h2>Instagram</h2>
      <p className={styles.firstp}>This is where we’ll be posting more of the fun</p>
      <h2>Discord</h2>
      <p className={styles.firstp}>Our discord server will be the main hub for our event.</p>
    </div>
  </div>
);

export default EventInfo;
