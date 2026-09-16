import React from "react";
import Nav from "./Components/Nav";
import Mainroutes from "./Routes/Mainroutes";
const App = () => {
  return (
    <div className="app-shell">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
