import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Login from "./login";
import StudentCVPage from "./student/cv-page";
import StudentHomePage from "./student/home-page";
import StudentInfo from "./student/info";

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/student/cv-page" element={<StudentCVPage/>} />
                <Route path="/student/home-page" element={<StudentHomePage/>} />
                <Route path="/student/info" element={<StudentInfo/>} />
            </Routes>
        </Router>
    );
}

export default App;
