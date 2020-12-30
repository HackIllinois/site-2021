// temporary
/* eslint-disable */
// @ts-nocheck

import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import ReactGa from 'react-ga';
import { getToken } from 'api';
// import Loading from 'components/Loading';



const Auth: React.FC = () => {

  useEffect(() => {
    function mobileRedirect(os: string, code) {
      const to = `hackillinois://org.hackillinois.${os}/auth?code=${code}`;
      ReactGa.event(os);
      window.location.replace(to);
    }
    const location = useLocation();
    const {
      code,
      isAndroid,
      isiOS,
      to,
    } = queryString.parse(location.search);

    if (!code) {
      window.location.replace('/');
    }

    if (isAndroid || isiOS) {
      const os = isAndroid ? 'android' : 'ios';
      mobileRedirect(os, code);
    } else {
      getToken(code).then((token) => {
        sessionStorage.setItem('token', token);
        window.location.replace(to);
      });
    }
    ReactGa.pageview("/Auth");
  },[]);

  return <div>Loading...</div>; // <Loading />;
}

export default Auth;
