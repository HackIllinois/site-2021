import React from 'react';
import './styles.scss';

import STARS from '../../assets/home/stars.svg';
import BOTTOM_LANDSCAPE from '../../assets/home/bottom_landscape.svg';
import MOUNTAINS from '../../assets/home/mountains.svg';
import LEFT_TREES from '../../assets/home/left_trees.svg';
import RIGHT_TREES from '../../assets/home/right_trees.svg';
import WIND from '../../assets/home/wind.svg';
import CAMPERS from '../../assets/home/campers.svg';
import LOGO from '../../assets/home/logo.svg';

const Home: React.FC = () => (
  <div className="home">
    <div className="home-stars" style={{ backgroundImage: `url(${STARS})` }} />
    <div className="home-moon" />
    <div className="home-bottom-landscape" style={{ backgroundImage: `url(${BOTTOM_LANDSCAPE})` }} />
    <div className="home-mountains" style={{ backgroundImage: `url(${MOUNTAINS})` }} />
    <div className="home-water" />
    <div className="home-left-trees" style={{ backgroundImage: `url(${LEFT_TREES})` }} />
    <div className="home-right-trees" style={{ backgroundImage: `url(${RIGHT_TREES})` }} />
    <div className="home-wind" style={{ backgroundImage: `url(${WIND})` }} />
    <div className="home-campers" style={{ backgroundImage: `url(${CAMPERS})` }} />
    <div className="home-logo" style={{ backgroundImage: `url(${LOGO})` }} />
    <div className="home-landing-text">Rekindling Connections</div>
  </div>
);

export default Home;
