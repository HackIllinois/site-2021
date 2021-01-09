import React from 'react';

import MOUNTAINS from 'assets/registration/mountains.svg';
import STARS from 'assets/registration/stars.svg';
import PROJECTOR from 'assets/registration/projector.svg';
import styles from './styles.module.scss';

const Background: React.FC = () => (
  <div className={styles.background}>
    <div className={styles.stars} style={{ backgroundImage: `url("${STARS}")` }} />
    <img src={MOUNTAINS} className={styles.mountains} alt="" />
    <div className={styles.projector} style={{ backgroundImage: `url("${PROJECTOR}")` }} />
    <div className={styles.road} />
  </div>
);

export default Background;
