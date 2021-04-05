import React from 'react';
import clsx from 'clsx';

import LOGO from 'assets/logo.svg';
import styles from './styles.module.scss';
import AnimatedLink from './AnimatedLink';

type LinkType = { text: string, to: string };
const links: LinkType[] = [
  { text: 'Mentors', to: '/mentors' },
  { text: 'Prizes', to: '/prizes' },
  { text: 'Schedule', to: '/schedule' },
  // { text: 'Resources', to: '/resources' },
];

const linksWithHome = [{ text: 'Home', to: '/' }].concat(links);

type PropTypes = {
  hideLogo?: boolean;
  showHome?: boolean;
  className?: string;
};

const NavBar = ({ hideLogo, showHome, className }: PropTypes): JSX.Element => (
  <div className={clsx(styles.navBar, className)}>
    <img className={clsx(styles.logo, hideLogo && styles.hidden)} src={LOGO} alt="HackIllinois Logo" />

    <div className={styles.spacer} />

    {(showHome ? linksWithHome : links).map(({ text, to }) => (
      <AnimatedLink className={styles.link} to={to}>{text}</AnimatedLink>
    ))}
  </div>
);

export default NavBar;
