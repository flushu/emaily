// using import because front-end with webpack babel configuration for es15
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// BrowserRouter: tells React how to behave
// Route: React component used to setup rules between certain routes inside applications
import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

/**
 * component using jsx
 */
const App = () => {
  return (
    <div>
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
};

export default App;
