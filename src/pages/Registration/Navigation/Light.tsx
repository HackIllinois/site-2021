import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

type LightProps = {
  size: number,
  top: number,
  left: number,
  name: string,
  index: number,
  handleClick: any,
  lightUp: boolean
};

const Light = ({ size, top, left, name, index, handleClick, lightUp }: LightProps): JSX.Element => (
  <div
    className={styles.light_container}
    style={{
      top: `${top}px`,
      left: `${left}%`,
    }}
  >
    <button
      onClick={() => handleClick(index)}
      type="button"
      className={clsx(styles.light, lightUp && styles.lightUp)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      .
    </button>
    <p className={styles.navText}>{name}</p>
  </div>
);

export default Light;
