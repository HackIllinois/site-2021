import React, { useState } from 'react';

import Background from './Background';
import Navigation from './Navigation';
import Form from './Form';

const Registration: React.FC = () => {
  const [formIndex, setFormIndex] = useState(0);

  return (
    <>
      <Background />
      <Navigation setFormIndex={setFormIndex} formIndex={formIndex} />
      <Form setFormIndex={setFormIndex} formIndex={formIndex} />
    </>
  );
};

export default Registration;
