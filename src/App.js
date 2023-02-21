import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./component/Mail/Mail";
import EmailList from "./component/EmailList/EmailList";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>

            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
