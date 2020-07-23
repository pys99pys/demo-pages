import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ReactCountTimer from "./components/ReactCounterTimer";

function App() {
  const [, page] = window.location.search.split("page=");

  switch (page) {
    case "react-count-timer":
      return <ReactCountTimer />;

    default:
      return null;
  }
}

export default App;
