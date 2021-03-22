import React, { useState } from 'react';
import styles from './styles.module.scss';

import LEFT_TREE from '../../assets/mentor/left_tree.svg';
import BUG from '../../assets/mentor/bug.svg';
import FOREGROUND_TREE from '../../assets/mentor/foreground_tree.svg';
import GROUND from '../../assets/mentor/ground.svg';
import RIGHT_TREE from '../../assets/mentor/right_tree.svg';
import LEFT_BUSH from '../../assets/mentor/left_bush.svg';
import RIGHT_BUSH from '../../assets/mentor/right_bush.svg';

const categories = [
  { name: 'Category 1', angle: 10 },
  { name: 'Category 2', angle: -10 },
  { name: 'Category 3', angle: 95 },
];

const mentors = [
  {
    imageURL: 'https://via.placeholder.com/150',
    name: 'Mentor 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus, quam eu urna suscipit rutrum dolor, sollicitudin amet. Semper eu massa diam habitant ante in turpis elementum. Ullamcorper lorem proin vestibulum massa. Pulvinar at scelerisque id augue ut laoreet. ',
    category: 0,
  },
  {
    imageURL: 'https://via.placeholder.com/150',
    name: 'Mentor 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus, quam eu urna suscipit rutrum dolor, sollicitudin amet. Semper eu massa diam habitant ante in turpis elementum. Ullamcorper lorem proin vestibulum massa. Pulvinar at scelerisque id augue ut laoreet. ',
    category: 2,
  },
  {
    imageURL: 'https://via.placeholder.com/150',
    name: 'Mentor 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus, quam eu urna suscipit rutrum dolor, sollicitudin amet. Semper eu massa diam habitant ante in turpis elementum. Ullamcorper lorem proin vestibulum massa. Pulvinar at scelerisque id augue ut laoreet. ',
    category: 1,
  },
  {
    imageURL: 'https://via.placeholder.com/150',
    name: 'Mentor 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus, quam eu urna suscipit rutrum dolor, sollicitudin amet. Semper eu massa diam habitant ante in turpis elementum. Ullamcorper lorem proin vestibulum massa. Pulvinar at scelerisque id augue ut laoreet. ',
    category: 2,
  },
  {
    imageURL: 'https://via.placeholder.com/150',
    name: 'Mentor 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus, quam eu urna suscipit rutrum dolor, sollicitudin amet. Semper eu massa diam habitant ante in turpis elementum. Ullamcorper lorem proin vestibulum massa. Pulvinar at scelerisque id augue ut laoreet. ',
    category: 1,
  },
  {
    imageURL: 'https://via.placeholder.com/150',
    name: 'Mentor 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus, quam eu urna suscipit rutrum dolor, sollicitudin amet. Semper eu massa diam habitant ante in turpis elementum. Ullamcorper lorem proin vestibulum massa. Pulvinar at scelerisque id augue ut laoreet. ',
    category: 2,
  },
  {
    imageURL: 'https://via.placeholder.com/150',
    name: 'Mentor 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus, quam eu urna suscipit rutrum dolor, sollicitudin amet. Semper eu massa diam habitant ante in turpis elementum. Ullamcorper lorem proin vestibulum massa. Pulvinar at scelerisque id augue ut laoreet. ',
    category: 1,
  },
  {
    imageURL: 'https://via.placeholder.com/150',
    name: 'Mentor 8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum purus, quam eu urna suscipit rutrum dolor, sollicitudin amet. Semper eu massa diam habitant ante in turpis elementum. Ullamcorper lorem proin vestibulum massa. Pulvinar at scelerisque id augue ut laoreet. ',
    category: 0,
  },
];
const Mentors: React.FC = () => {
  const [tab, setTab] = useState<number>(0);
  return (
    <div className={styles.background}>
      <div className={styles.shade} />
      <img src={RIGHT_BUSH} alt="" className={styles.right_bush} />
      <img src={LEFT_BUSH} alt="" className={styles.left_bush} />
      <img src={FOREGROUND_TREE} alt="" className={styles.foreground_tree} />
      <img src={RIGHT_TREE} alt="" className={styles.right_tree} />
      <img src={LEFT_TREE} alt="" className={styles.left_tree} />
      <img src={GROUND} alt="" className={styles.ground} />
      <img src={BUG} alt="" className={styles.bug} />
      <div className={styles.mentor_type_list}>
        {categories.map((category, i) => (
          <div
            style={{ transform: `rotate(${category.angle}deg)` }}
            className={[
              styles.category,
              i === tab ? styles.category_select : '',
            ].join(' ')}
            onKeyPress={() => {}}
            tabIndex={i}
            onClick={() => {
              setTab(i);
            }}
            role="button"
          >
            {category.name}
          </div>
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.category_title}>{categories[tab].name}</div>
        <div className={styles.shader} />
        <div className={styles.mentor_list}>
          {/* Hack to get some extra padding, but also keeps the overflow cutoff at the top of the container */}
          <br />
          <br />
          {mentors.map((mentor) => {
            if (mentor.category === tab) {
              return (
                <div key={mentor.name} className={styles.mentor}>
                  <img
                    src={mentor.imageURL}
                    alt=""
                    className={styles.mentor_image}
                  />
                  <div className={styles.mentor_text}>
                    <div className={styles.mentor_name}>{mentor.name}</div>
                    <div className={styles.mentor_description}>
                      {mentor.description}
                    </div>
                  </div>
                </div>
              );
            }
            return '';
          })}
        </div>
      </div>
    </div>
  );
};

export default Mentors;