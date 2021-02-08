import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={
        (props) =>
          auth.isAuthenticated === true && auth.user.id === 1 ? (
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

AdminRoute.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
  component: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoute);
