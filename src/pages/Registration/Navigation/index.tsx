/* eslint-disable */
import React from 'react';

import STRING from 'assets/registration/navigation/string.svg';
import Light from './Light';

import styles from './styles.module.scss';

type NavigationProps = {
  handleClick: any,
  selected: number
};

// [name, size, top, left]
const lights: [string, number, number, number][] = [
  ['Welcome', 40, 55, 3],
  ['Personal Info', 30, 50, 20],
  ['Race Demographics', 40, 60, 35],
  ['Education', 50, 45, 53],
  ['Experience', 30, 50, 70],
  ['Finish', 40, 65, 85],
]

const Navigation = ({ handleClick, selected }: NavigationProps): JSX.Element => (
  <div className={styles.navigation}>
    <div className={styles.string} style={{ backgroundImage: `url(${STRING})` }} />
    {lights.map(([name, size, top, left], i) => (
      <Light
        name={name}
        size={size}
        top={top}
        left={left}
        index={i}
        handleClick={handleClick}
        lightUp={selected === i}
      />
    ))}
  </div>
);

export default Navigation;
