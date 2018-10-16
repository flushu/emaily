// using import because front-end with webpack babel configuration for es15
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// BrowserRouter: tells React how to behave
// Route: React component used to setup rules between certain routes inside applications
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

/**
 * class component using jsx
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    // materialize css requires us to add class container to root of components
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" component={Landing} exact={true} />
            <Route path="/surveys" component={Dashboard} exact />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App); // connect(): 1st arg: map state to props, 2nd arg: actions
