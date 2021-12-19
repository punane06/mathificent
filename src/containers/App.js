import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Game from "../components/Game";

function App() {
  const [operation, setOperation] = useState("x");
  const [maxNumber, setMaxNumber] = useState(10);

  return (
    <div className="App">
      <Header />
      <Route
        exact
        path="/"
        component={() => (
          <Main
            operation={operation}
            setOperation={setOperation}
            maxNumber={maxNumber}
            setMaxNumber={setMaxNumber}
          />
        )}
      />
      <Route
        path="/play"
        component={() => <Game operation={operation} maxNumber={maxNumber} />}
      />
      <Footer />
    </div>
  );
}

export default App;
