import React from 'react';
import styles from './styles.module.scss';

import LANDSCAPE_CONT from '../../assets/home/section2/landscape_continued.svg';

const Section2: React.FC = () => (
  <div className={styles.home}>
    <div className={styles.bottomLandscape} style={{ backgroundImage: `url(${LANDSCAPE_CONT})` }} />
  </div>
);

export default Section2;
