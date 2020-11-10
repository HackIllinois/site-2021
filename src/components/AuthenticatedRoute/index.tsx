import React from "react";
import { Route } from "react-router-dom";

import { isAuthenticated, authenticate } from "api";
// import Loading from "components/Loading";

type propTypes = {
    path: string;
};

const AuthenticatedRoute: React.FC<propTypes> = (props) => {
    if (!isAuthenticated()) {
        authenticate(props.path);
        return <div>Loading</div>; /*<Loading />;*/
    }

    // Allow props spreading because this is a higher order component
    return <Route {...props} />; // eslint-disable-line react/jsx-props-no-spreading
};

export default AuthenticatedRoute;
