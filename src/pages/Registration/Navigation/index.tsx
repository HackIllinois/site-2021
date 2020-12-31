import React from 'react';

import STRING from 'assets/registration/navigation/string.svg';
import Light from './Light';

import styles from './styles.module.scss';

type NavigationProps = {
  handleClick: any
};

const Navigation = ({ handleClick }: NavigationProps) => (
  <div className={styles.navigation}>
    <div className={styles.string} style={{ backgroundImage: `url(${STRING})` }} />
    <Light size={40} top={4.5} left={3} name="Welcome" index="0" handleClick={handleClick} />
    <Light size={30} top={4.2} left={20} name="Personal Info" index="1" handleClick={handleClick} />
    <Light size={40} top={5.0} left={35} name="Race Demographics" index="2" handleClick={handleClick} />
    <Light size={50} top={4.0} left={53} name="Education" index="3" handleClick={handleClick} />
    <Light size={30} top={4.0} left={70} name="Experience" index="4" handleClick={handleClick} />
    <Light size={40} top={5.5} left={85} name="Finish" index="5" handleClick={handleClick} />
  </div>
);

export default Navigation;
