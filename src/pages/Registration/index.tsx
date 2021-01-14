import React, { useState } from 'react';

import Background from './Background';
import Navigation from './Navigation';
import Form from './Form';

const Registration: React.FC = () => {
  const [formIndex, setFormIndex] = useState(0);

  const toggleIndex = (index: number) => {
    setFormIndex(index);
  };

  return (
    <>
      <Background />
      <Navigation handleClick={toggleIndex} selected={formIndex} />
      <Form formIndex={formIndex} setFormIndex={setFormIndex} />
    </>
  );
};

export default Registration;
