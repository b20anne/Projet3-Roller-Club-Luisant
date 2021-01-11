import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

// import Pages
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import ShopPage from "./pages/ShopPage/ShopPage";

// import Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/shop" component={ShopPage} />
      </Switch> */}
      <Login />
    </div>
  );
}

export default App;
