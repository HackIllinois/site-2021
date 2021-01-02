import React, { useEffect } from 'react';
import ReactGa from 'react-ga';
import Hero from './Hero';
// import EventInfo from './EventInfo';

const Home: React.FC = () => {
  useEffect(() => {
    ReactGa.pageview('/');
  }, []);

  return (
    <>
      <Hero />
      {
        /* <EventInfo /> */
      }
    </>
  );
};

export default Home;
