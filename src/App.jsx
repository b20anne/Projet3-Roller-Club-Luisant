import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

// import Pages
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ShopPage from "./pages/ShopPage/ShopPage";

// import Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
