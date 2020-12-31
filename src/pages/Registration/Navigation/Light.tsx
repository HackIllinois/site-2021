import React from 'react';

import styles from './styles.module.scss';

type LightProps = {
  size: number,
  top: number,
  left: number,
  name: string,
  index: string,
  handleClick: any
};

const Light = ({ size, top, left, name, index, handleClick }: LightProps) => (
  <div
    className={styles.light_container}
    style={{
      top: `${top}%`,
      left: `${left}%`,
    }}
  >
    <button
      onClick={handleClick}
      type="button"
      id={index}
      className={styles.light}
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
