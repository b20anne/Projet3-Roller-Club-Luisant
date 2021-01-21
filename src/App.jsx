import React from "react";
import jwtDecode from "jwt-decode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

// redux
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import setAuthToken from "./services/setAuthToken";

// private route
import PrivateRoute from "./privateRoute/privateRoute";
import AdminRoute from "./adminRoute/adminRoute";

// import Pages
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ShopPage from "./pages/ShopPage/ShopPage";
import Planning from "./pages/Planning/Planning";
import Toutes from "./pages/ToutesEnRoller/Toutes";
import AdminPageNews from "./pages/AdminPageNews/AdminPageNews";
import Regle from "./pages/Reglement/Reglement";
import CoursBaby from "./pages/Cours/CoursBaby";

// import Components
import NavBar from "./components/Navbar/Navbar";
import DashboardUsers from "./pages/AdminPage/DashboardUsers/DashboardUsers";
import Footer from "./components/Footer/Footer";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwtDecode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App" id="app">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/toutes_en_roller" component={Toutes} />
            <Route exact path="/réglement" component={Regle} />
            <Route exact path="/cours/baby" component={CoursBaby} />
            <AdminRoute exact path="/shop" component={ShopPage} />
            <PrivateRoute exact path="/planning" component={Planning} />
            <AdminRoute exact path="/shop" component={ShopPage} />
            <AdminRoute exact path="/admin/news" component={AdminPageNews} />
            <AdminRoute
              exact
              path="/admin/dashboarduser"
              component={DashboardUsers}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
