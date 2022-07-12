import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import SearchedData from './SearchedData/SearchedData';
import SearchedId from './SearchedData/SearchedId';
function App() {
  const [globalVar, setglobalVar] = useState("")
  return (
    <>
      <NavBar setglobalVar={setglobalVar} />
      <Routes>
        <Route path="/data" element={<SearchedData globalVar={globalVar} />} />
        <Route path="/Idsearch" element={<SearchedId />} />
      </Routes></>




  );
}

export default App;
