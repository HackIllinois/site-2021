import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import ReactGa from 'react-ga';
import { getToken } from 'util/api';
// import Loading from 'components/Loading';

function mobileRedirect(os: 'android' | 'ios', code: string) {
  ReactGa.event({
    category: 'mobile',
    action: os,
  });
  const to = `hackillinois://org.hackillinois.${os}/auth?code=${code}`;
  window.location.replace(to);
}

type QueryTypes = {
  code?: string;
  isAndroid?: string;
  isiOS?: string;
  to?: string;
};

const Auth: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGa.pageview('/auth');
    const { code, isAndroid, isiOS, to }: QueryTypes = queryString.parse(location.search);

    if (code) {
      if (isAndroid || isiOS) {
        const os = isAndroid ? 'android' : 'ios';
        mobileRedirect(os, code);
      } else {
        getToken(code).then((token) => {
          sessionStorage.setItem('token', token);
          window.location.replace(to as string);
        });
      }
    } else {
      window.location.replace('/');
    }
  }, []);
  return <div>Loading...</div>; // <Loading />;
};

export default Auth;
