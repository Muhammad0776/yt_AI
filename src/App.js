import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Cart />
    </div>
  );
};

export default App;
