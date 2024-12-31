import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminModule from "./modules/AdminModule";
import UserModule from "./modules/UserModule";
import ReportingModule from "./modules/ReportingModule";
import NavBar from "./components/NavBar";
import './styles.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/admin" element={<AdminModule />} />
        <Route path="/user" element={<UserModule />} />
        <Route path="/reporting" element={<ReportingModule />} />
      </Routes>
    </Router>
  );
}

export default App;