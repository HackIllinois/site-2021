import React from 'react';
import './styles.scss';

import STARS from '../../assets/home/stars.svg';
import BOTTOM_LANDSCAPE from '../../assets/home/bottom_landscape.svg';
import MOUNTAINS from '../../assets/home/mountains.svg';
import LEFT_TREES from '../../assets/home/left_trees.svg';
import RIGHT_TREES from '../../assets/home/right_trees.svg';

const Home: React.FC = () => (
  <div className="home">
    <div className="home-stars" style={{ backgroundImage: `url(${STARS})` }} />
    <div className="home-moon" />
    <div className="home-bottom-landscape" style={{ backgroundImage: `url(${BOTTOM_LANDSCAPE})` }} />
    <div className="home-mountains" style={{ backgroundImage: `url(${MOUNTAINS})` }} />
    <div className="home-water" />
    <div className="home-left-trees" style={{ backgroundImage: `url(${LEFT_TREES})` }} />
    <div className="home-right-trees" style={{ backgroundImage: `url(${RIGHT_TREES})` }} />
  </div>
);

export default Home;
