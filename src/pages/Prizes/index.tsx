import React from 'react';
import clsx from 'clsx';

import LEFT_TREES from 'assets/prizes/left_trees.svg';
import RIGHT_TREES from 'assets/prizes/right_trees.svg';
import CENTER_BUSHES from 'assets/prizes/center_bushes.svg';
import MOUNTAINS from 'assets/prizes/mountains.svg';
import STARS from 'assets/prizes/stars.svg';
import MOON from 'assets/prizes/moon.svg';

import styles from './styles.module.scss';
import prizeData from './prizes.json';
import PrizeIcon from './PrizeIcon';

const Prizes = (): JSX.Element => (
  <div className={styles.prizes}>
    <div className={styles.background}>
      <img className={styles.leftTrees} src={LEFT_TREES} alt="" />
      <img className={styles.rightTrees} src={RIGHT_TREES} alt="" />
      <img className={styles.centerBushes} src={CENTER_BUSHES} alt="" />
      <img className={styles.mountains} src={MOUNTAINS} alt="" />
      <img className={styles.stars} src={STARS} alt="" />
      <img className={styles.moon} src={MOON} alt="" />
    </div>

    <div className={styles.content}>
      <div className={styles.mainPrizes}>
        {prizeData.mainPrizes.map(({ name, description, value }) => (
          <div className={styles.prize}>
            <PrizeIcon className={clsx(styles.prizeIcon, styles.light)} color="#ADD8CD" />
            <PrizeIcon className={clsx(styles.prizeIcon, styles.dark)} color="#2C9C98" />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <h4 className={styles.value}>${value}</h4>
          </div>
        ))}
      </div>

      {prizeData.categories.map(({ title, prizes, lightColor, darkColor }) => (
        <div className={styles.category}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.prizesContainer}>
            {prizes.map(({ name, description, value }) => (
              <div className={styles.prize}>
                <PrizeIcon className={clsx(styles.prizeIcon, styles.light)} color={lightColor} />
                <PrizeIcon className={clsx(styles.prizeIcon, styles.dark)} color={darkColor} />
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{description}</p>
                <h4 className={styles.value}>${value}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Prizes;
