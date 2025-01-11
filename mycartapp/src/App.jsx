import { useState } from "react";
import "./App.css";
import Navbar from "./comp/Navbar";
import MainRoutes from "./comp/Mainroutes";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
