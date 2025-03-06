import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HowToPage from "./HowToPage";

function App() {
    return (
        <Router>
            <Routes>
                {/* Главная страница */}
                <Route path="/" element={<HomePage />} />
                {/* Дополнительная страница */}
                <Route path="/how-to" element={<HowToPage />} />
            </Routes>
        </Router>
    );
}

export default App;
