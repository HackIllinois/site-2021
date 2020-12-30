import React from 'react';
import { Route } from 'react-router-dom';
import { isAuthenticated, authenticate } from 'api';

type AuthenticatedRoutePropTypes = {
  path: string;
};

const AuthenticatedRoute: React.FC<AuthenticatedRoutePropTypes> = (props) => {
  const { path } = props;
  if (!isAuthenticated()) {
    authenticate(path);
    return <div>Loading</div>;
  }

  // Allow props spreading because this is a higher order component
  return <Route {...props} />; // eslint-disable-line react/jsx-props-no-spreading
};

export default AuthenticatedRoute;
