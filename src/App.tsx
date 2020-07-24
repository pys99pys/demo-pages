import React from "react";
import ReactCountTimer from "./components/ReactCounterTimer";
import ReactUseFile from "./components/ReactUseFile";

function App() {
  const [, page] = window.location.search.split("page=");

  switch (page) {
    case "react-count-timer":
      return <ReactCountTimer />;

    case "react-use-file":
      return <ReactUseFile />;

    default:
      return null;
  }
}

export default App;
