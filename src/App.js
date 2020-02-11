import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from "./Components/Movies";
import FormComponent from "./Components/Form";
import NavBar from "./NavBarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <Router>
    <NavBar></NavBar>
      <h1>Movies</h1>
      <Route path={'/peliculas'} component={Movies}></Route>
      <Route path={'/form'} component={FormComponent}></Route>
    </Router>
    </div>
  );
}

export default App;
