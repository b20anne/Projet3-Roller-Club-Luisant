import React from "react";
import "./ProfilUser.css";
import { MdPhone, MdMailOutline, MdNotInterested } from "react-icons/md";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Logo1 from "../../components/assets/Roller.jpg";

const API_URL = process.env.REACT_APP_API_URL;

class ProfilUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const { userInfo } = this.props;
    const { id } = userInfo;
    console.log(this.props);

    axios
      .get(`${API_URL}/api/profile/${id}`)

      .then((response) => response.data)
      .then((data) => {
        this.setState({
          user: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {user ? (
          <>
            <div className="profilCardUser">
              <img src={Logo1} alt="" className="photoUser" />
              <div className="descriptUser">
                <div className="nameUser">
                  Nom / Prénom : {user.lastName} {user.firstName}
                </div>
                <div className="statusUser">Année de naissance: {user.age}</div>
                <div className="groupBttn">
                  <button type="submit" className="bttnDeco" alt="Déco">
                    Déconnexion
                    <MdNotInterested style={{ fontSize: "15px" }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="contactCard">
              <div className="userPhone">
                <MdPhone style={{ fontSize: "25px" }} />
                Téléphone : {user.Phone_Number}
              </div>
              <div className="userEmail">
                <MdMailOutline style={{ fontSize: "25px" }} />
                Email : {user.email}
              </div>
            </div>
          </>
        ) : (
          <p>loadding</p>
        )}
      </div>
    );
  }
}

ProfilUser.propTypes = {
  userInfo: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  userInfo: state.auth.user,
});

export default connect(mapStateToProps)(ProfilUser);
