import React from "react";
import "../ProfilUser/ProfilUser.css";
import Logo1 from "../../components/assets/Roller.jpg";
import MdPhone from "react-icons/md";
import MdMailOutline from "react-icons/md";
import MdCreate from "react-icons/md";
import MdNotInterested from "react-icons/md";

const ProfilUser = () => {
    return (
        <div>
            <div className="profilCardUser">
                <img src={Logo1} className="photoUser" />
                <div className="descriptUser">
                    <div className="nameUser">Jean Denis Test</div>
                    <div className="introUser">Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis nobis similique optio. Inventore cupiditate possimus architecto quisquam ea,
                    fuga vel ad laudantium,
                    in neque culpa distinctio dolorum, est libero velit!</div>
                    <div className="statusUser">Status :</div>
                    <button>Déconnexion</button>
                    <button>Modifier</button>
                </div>
            </div>
            <div className="contactCard">
                <div className="userPhone">Téléphone</div>
                <div className="userEmail">Email</div>
            </div>
        </div>
    );
  };
  
  export default ProfilUser;
  