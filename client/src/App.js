import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./App.css";

import Navbar from "./components-2/layout/navbar";
import Landing from "./components-2/layout/landing";
// import RegisterPage from "./views/examples/RegisterPage";
import Register from "./components-2/auth/Register";
import Login from "./components-2/auth/Login";
import Alert from "./components-2/layout/alert";
import Profile from "./components-2/dashboard/profile";
import Posts from "./components-2/posts/Posts";
import Post from "./components-2/post/Post";
import CreateProfile from "./components-2/dashboard/createProfile";
import EditProfile from "./components-2/dashboard/editProfile";
import Search from "./components-2/dashboard/search";
import PrivateRoute from "./components-2/routing/PrivateRoute";

//styles
// import "./assets/css/bootstrap.min.css";
// import "./assets/demo/demo.css";
// import "./assets/scss/paper-kit.scss";
// pages
import Index from "./views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import LandingPage from "./views/examples/LandingPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";
import ProfileActions from "./components-2/dashboard/profileActions.js";
import RegisterPage from "./views/examples/RegisterPage.js";
import ContactPage from "./components-2/layout/ContactUs.js";
// others

//dashboard
import { createBrowserHistory } from "history";
import Dashboard from "./components/Dashboard/homepage-dashboard";
// import "./assets/scss/paper-dashboard.scss?v=1.1.0";
// //import "./assets/demo/demo.css";
// import "perfect-scrollbar/css/perfect-scrollbar.css";

//redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const hist = createBrowserHistory();

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router history={hist}>
        {" "}
        {/*  history={hist} */}
        <Fragment>
          {/* <Navbar /> */}

          {/* <Route exact path="/" component={Landing} /> */}

          {/* <Alert /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={props => <LandingPage {...props} />}
            />

            <Route path="/index" render={props => <Index {...props} />} />
            {/* <Redirect to="/admin/dashboard" /> */}
            <Route
              path="/admin/dashboard"
              render={props => <Dashboard {...props} />}
            />

            <Route
              path="/profile-page"
              render={props => <ProfilePage {...props} />}
            />
            {/* <Route
              path="/register-page"
              render={props => <RegisterPage {...props} />}
            /> */}
            {/* <Redirect to="/index" /> */}
            {/* <Route exact path="/" component={Landing} /> */}
            {/* <Route exact path="/login" component={LoginPage} /> */}

            <Route path="/login" exact render={props => <Login {...props} />} />

            <Route exact path="/register" component={Register} />

            <Route exact path="/contact" component={ContactPage} />

            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/search" component={Search} />
            <PrivateRoute
              exact
              path="/profilepage"
              component={ProfileActions}
            />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/jobs" component={Posts} />
            <PrivateRoute exact path="/jobs/:id" component={Post} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
