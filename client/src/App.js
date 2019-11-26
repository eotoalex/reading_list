import React from "react";
import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {BrowserRouter as Link, Router, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav>
      <Router>
      <Switch>
      <Route 
      exact path="/"
      component={Books}
      />

      <Route
      exact path="/books"
      component={Books}
      />

      <Route
      exact path="/books/:id"
      component={Detail}
      />


      <Route
     
      component={NoMatch}
      />  

      </Switch>
      
      </Router>

      <Books />
      </Nav> 
    </div>
  );
}

export default App;
