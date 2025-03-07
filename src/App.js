import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HowToPage from "./HowToPage";
import AdminWelcome from "./Components/AdminPanel/Welcome"; // Импортируем страницу
import { SignIn } from "./Components/AdminPanel/LoginPage";
import { SignUp } from "./Components/AdminPanel/RegisterPage";
import XlsxViewer from "./Components/AdminPanel/XlsxViwer/XlsxViewer";
import RoomsList from "./Components/AdminPanel/RoomsPage";
import ProfilePage from "./Components/AdminPanel/ProfilePage"
import ProfileUpdatePage from "./Components/AdminPanel/ProfileEditPage";
import EventsList from "./Components/AdminPanel/EventsPage";
import Events from "./Events";

function App() {
    return (
        <Router>
            <Routes>
                {/* Главная страница */}
                <Route path="/" element={<HomePage />} />
                {/* Дополнительная страница */}
                <Route path="/how-to" element={<HowToPage />} />
                <Route path="/admin" element={<AdminWelcome />} />
                <Route path="/login" element={<SignIn/>} />
                <Route path="/register" element={<SignUp/>} />
                <Route path="/xlsxViewer/:hash" element={<XlsxViewer/>} />
                <Route path="/admin/rooms" element={<RoomsList/>} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/update-user" element={<ProfileUpdatePage/>} />
                <Route path="/admin/events" element={<EventsList/>} />
                <Route path="/event" element={<Events/>} />
            </Routes>
        </Router>
    );
}

export default App;
