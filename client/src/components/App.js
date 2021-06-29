import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Chats from "./Chats";
import Login from "./Login";
import {AuthProvider} from "../contexts/AuthContext";

function App() {
  return (
    <div style={{fontfamily: 'Avenir'}}>
      <Router>
          <AuthProvider>
              <Switch>
                  <Route path="/chats" component={Chats}/>
                  <Route path="/" component={Login}/>
              </Switch>
          </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
