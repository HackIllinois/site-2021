import React, { useState } from 'react';

import Background from './Background';
import Navigation from './Navigation';
import Form from './Form';

const Registration: React.FC = () => {
  const [formIndex, setFormIndex] = useState(0);
  //   const [prevTab, setPrevTab] = useState<HTMLElement>();

  const toggleIndex = (e: { target: HTMLDivElement }) => {
    setFormIndex(Number(e.target.getAttribute('id')));
    // e.target.style.background = '#FED684';
    // if (prevTab) {
    //   prevTab.style.background = '#85692F';
    //   setPrevTab(e.target);
    // }
  };

  return (
    <>
      <Background />
      <Navigation handleClick={toggleIndex} selected={formIndex} />
      <Form formIndex={formIndex} />
    </>
  );
};

export default Registration;
