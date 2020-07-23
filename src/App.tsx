import React from "react";
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
