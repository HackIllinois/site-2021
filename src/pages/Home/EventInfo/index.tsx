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
      <p className={styles.firstp}>HackThis is a fully virtual, education focused hackathon taking place between August 7th and August 15th, 2020. At our event, you will be given resources to develop solutions to enhance virtual learning on a global scale, while having the opportunity to hear from leaders in education, attend workshops, and consult mentors from different backgrounds. HackThis is a great way to gain new technical skills and collaborate with other students, with a common goal of innovation for social good! </p>
      <h1>JOIN US</h1>
      <p className={styles.firstp}>Follow us on Twitter (@HackIllinois) and Instagram (@HackIllinois) to be notified of our event updates! </p>
      <p>In terms of the platforms you will need to have access to, we’ll be connecting mentors and attendees on Discord! As we approach the event, we’ll post a link on our social media to the discord server so that you can join and introduce yourself. </p>
      <h2>Twitter</h2>
      <p className={styles.firstp}>This is where we’ll be posting main updates with regards to our schedule, additions to our event, and other things we come up with! We’ll also be using it during the event to make updates with any schedule changes and send out reminders for workshops and other mini-events starting out!</p>
      <h2>Instagram</h2>
      <p className={styles.firstp}>This is where we’ll be posting more of the fun, behind-the-scenes aspects of our event! You’ll get an opportunity to see the work that goes into making the event a possibility and also get insights from staff and mentors about what makes HackThis a one-of-a-kind hacking experience.</p>
      <h2>Discord</h2>
      <p className={styles.firstp}>Our discord server will be the main hub for our event. You’ll use this to find and communicate with teammates and other attendees, access our workshops and mini-events, and get help from mentors—all through one centralized platform.</p>
    </div>
  </div>
);

export default EventInfo;
