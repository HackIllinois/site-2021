import React from 'react';
import { Route } from 'react-router-dom';
<<<<<<< HEAD
import { isAuthenticated, authenticate } from 'api';
=======
import { isAuthenticated, authenticate } from 'util/api';
>>>>>>> 38ff90a4ea5a1673c5047817a3c3678b4a8573cf

type AuthenticatedRoutePropTypes = {
  path: string;
};

<<<<<<< HEAD
const AuthenticatedRoute: React.FC<AuthenticatedRoutePropTypes> = (props) => {
=======
const AuthenticatedRoute = (props: AuthenticatedRoutePropTypes): JSX.Element => {
>>>>>>> 38ff90a4ea5a1673c5047817a3c3678b4a8573cf
  const { path } = props;
  if (!isAuthenticated()) {
    authenticate(path);
    return <div>Loading</div>;
  }

  // Allow props spreading because this is a higher order component
  return <Route {...props} />; // eslint-disable-line react/jsx-props-no-spreading
};

export default AuthenticatedRoute;
