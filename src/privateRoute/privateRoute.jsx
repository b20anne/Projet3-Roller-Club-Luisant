import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={
        (props) =>
          auth.isAuthenticated === true ? (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
  component: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);