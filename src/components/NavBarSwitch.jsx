import React from "react";
import Navbar from "./Navbar/Navbar";
import NavbarUser from "./NavbarUser/NavbarUser";

function NavBar() {
  return (
    <div className="App">
      <div className="row">
        {
          // Check if message failed
          NavBar === 1 ? <Navbar /> : <NavbarUser />
        }
      </div>
    </div>
  );
}

export default NavBar;
