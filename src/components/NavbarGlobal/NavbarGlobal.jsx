import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// import navbar
import Navbar from "../Navbar/Navbar";
import NavbarConnect from "../NavbarUser/NavbarUser";

function NavbarGlobal({ auth }) {
  return <>{auth.isAuthenticated === true ? <NavbarConnect /> : <Navbar />}</>;
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

NavbarGlobal.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default connect(mapStateToProps)(NavbarGlobal);
