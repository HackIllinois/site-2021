import React from 'react';
import { Route } from 'react-router-dom';
import { isAuthenticated, authenticate } from 'util/api';

type AuthenticatedRoutePropTypes = {
  path: string;
};

const AuthenticatedRoute = (props: AuthenticatedRoutePropTypes): JSX.Element => {
  const { path } = props;
  if (!isAuthenticated()) {
    authenticate(path);
    return <div>Loading</div>;
  }

  return <Route {...props} />;
};

export default AuthenticatedRoute;
