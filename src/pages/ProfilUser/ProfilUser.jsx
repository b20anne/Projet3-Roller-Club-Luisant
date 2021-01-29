import React from "react";
import "../ProfilUser/ProfilUser.css";
import Logo1 from "../../components/assets/Roller.jpg";
import { MdPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdNotInterested } from "react-icons/md";
import { connect } from "react-redux";
import axios from "axios";

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

        const{id}=this.props.userInfo
        console.log(this.props)

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
       };
            
    render () {
        const {user}=this.state;
        return (
            <div>
                {user ? (<><div className="profilCardUser">
                    <img src={Logo1} className="photoUser" />
                    <div className="descriptUser">
                        <div className="nameUser">Nom / Prénom : {user.lastName} {user.firstName}</div>
                        <div className="statusUser">Âge : {user.age}</div>
                        <div className="groupBttn">
                        <button className ="bttnDeco" alt="Déco">Déconnexion<MdNotInterested style={{fontSize: '15px'}}/></button>
                        </div>
                    </div>
                </div>
                <div className="contactCard">
                    <div className="userPhone"><MdPhone style={{fontSize: '25px'}}/>Téléphone : {user.Phone_Number}</div>
                    <div className="userEmail"><MdMailOutline style={{fontSize: '25px'}}/>Email : {user.email}</div>
                </div></>) : (<p>loadding</p>)}
            </div>
        );
    }
};
  
const mapStateToProps = (state) => ({
    userInfo: state.auth.user,
  });

  export default connect(mapStateToProps)(ProfilUser);