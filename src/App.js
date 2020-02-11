import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from "./Components/Movies";
import FormComponent from "./Components/Form";

function App() {
  return (
    <div className="App">
      <h1>Movies</h1>
      <FormComponent></FormComponent>
      <Movies></Movies>

    </div>
  );
}

export default App;
