import './App.css';
import Money from './Money';
import Navbar from "./Navbar";
import Alert from "./Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,  { useState}  from 'react';
import Share from './Share';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Alert alert={alert} />


        <div className="container">
          <Routes>
            <Route exact path="/" element={<Money />}></Route>
            <Route exact path="/Share" element={<Share  showAlert={showAlert}
/>}></Route>


          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
