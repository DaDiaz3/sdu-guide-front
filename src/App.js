import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminWelcome from "./Components/AdminPanel/Welcome"; // Импортируем страницу
import logo from "./logo.svg";
import "./App.css";
import { SignIn } from "./Components/AdminPanel/LoginPage";
import { SignUp } from "./Components/AdminPanel/RegisterPage";
import XlsxViewer from "./Components/AdminPanel/XlsxViwer/XlsxViewer";
import RoomsList from "./Components/AdminPanel/RoomsPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminWelcome />} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/xlsxViewer/:hash" element={<XlsxViewer/>} />
          <Route path="/rooms" element={<RoomsList/>} />
        </Routes>
      </div>
    </Router>
  );
}

// Компонент главной страницы
function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default App;
