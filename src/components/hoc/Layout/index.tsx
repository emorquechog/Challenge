import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import RegisterUser from "components/containers/RegisterUser";
import UserList from "components/containers/UserList";
import Profile from "components/containers/Profile";
import NavBar from "components/UI/NavBar";
import { RouteComponentProps } from "react-router";
class Layout extends React.PureComponent<RouteComponentProps> {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        {this.props.children}
        <Switch>
          <Route exact={true} path="/register" component={RegisterUser} />
          <Route exact={true} path="/list" component={UserList} />
          <Route exact={true} path="/profile" component={Profile} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
