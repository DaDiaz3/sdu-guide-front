import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HowToPage from "./HowToPage";

import BlockD from "./BlockD/BlockD";
import BlockDLeftSide from"./BlockD/BlockDLeftSide"
import BlockDRightSide from"./BlockD/BlockDRightSide"

import BlockE from "./BlockE/BlockE";
import BlockELeftSide from"./BlockE/BlockELeftSide"
import BlockERightSide from"./BlockE/BlockERightSide"

import BlockF from "./BlockF/BlockF";
import BlockFLeftSide from"./BlockF/BlockFLeftSide"
import BlockFRightSide from "./BlockF/BlockFRightSide"

import BlockG from "./BlockG/BlockG";
import BlockGLeftSide from"./BlockG/BlockGLeftSide"
import BlockGRightSide from"./BlockG/BlockGRightSide"

import BlockH from "./BlockH/BlockH";
import BlockHLeftSide from"./BlockH/BlockHLeftSide"
import BlockHRightSide from"./BlockH/BlockHRightSide"

import BlockI from "./BlockI/BlockI";
import BlockILeftSide from"./BlockI/BlockILeftSide"
import BlockIRightSide from"./BlockI/BlockIRightSide"

import AdminWelcome from "./Components/AdminPanel/Welcome"; // Импортируем страницу
import { SignIn } from "./Components/AdminPanel/LoginPage";
import { SignUp } from "./Components/AdminPanel/RegisterPage";
import XlsxViewerAdmin from "./Components/AdminPanel/XlsxViwer/XlsxViewerAdmin";
import RoomsList from "./Components/AdminPanel/RoomsPage";
import ProfilePage from "./Components/AdminPanel/ProfilePage"
import ProfileUpdatePage from "./Components/AdminPanel/ProfileEditPage";
import EventsList from "./Components/AdminPanel/EventsPage";
import Events from "./Events";
import BuildingPlan from "./Components/AdminPanel/LeftBuildingPlan";
import XlsxViewer from "./Components/AdminPanel/XlsxViwer/XlsxViewer";

function App() {
    return (
        <Router>
            <Routes>
                {/* Главная страница */}
                <Route path="/" element={<HomePage />} />
                {/* Дополнительная страница */}
                <Route path="/how-to" element={<HowToPage />} />

                <Route path="/BlockD" element={<BlockD />} />
                <Route path="/BlockDLeftSide" element={<BlockDLeftSide />} />
                <Route path="/BlockDRightSide" element={<BlockDRightSide />} />

                <Route path="/BlockE" element={<BlockE />} />
                <Route path="/BlockELeftSide" element={<BlockELeftSide />} />
                <Route path="/BlockERightSide" element={<BlockERightSide />} />

                <Route path="/BlockF" element={<BlockF />} />
                <Route path="/BlockFLeftSide" element={<BlockFLeftSide />} />
                <Route path="/BlockFRightSide" element={<BlockFRightSide />} />

                <Route path="/BlockG" element={<BlockG />} />
                <Route path="/BlockGLeftSide" element={<BlockGLeftSide />} />
                <Route path="/BlockGRightSide" element={<BlockGRightSide />} />

                <Route path="/BlockH" element={<BlockH />} />
                <Route path="/BlockHLeftSide" element={<BlockHLeftSide />} />
                <Route path="/BlockHRightSide" element={<BlockHRightSide />} />

                <Route path="/BlockI" element={<BlockI />} />
                <Route path="/BlockILeftSide" element={<BlockILeftSide />} />
                <Route path="/BlockIRightSide" element={<BlockIRightSide />} />

                <Route path="/admin" element={<AdminWelcome />} />
                <Route path="/login" element={<SignIn/>} />
                <Route path="/register" element={<SignUp/>} />
                <Route path="/xlsxViewer/:hash" element={<XlsxViewerAdmin/>} />
                <Route path="/schedule/:sef" element={<XlsxViewer/>} />
                <Route path="/admin/rooms" element={<RoomsList/>} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/update-user" element={<ProfileUpdatePage/>} />
                <Route path="/admin/events" element={<EventsList/>} />
                <Route path="/event" element={<Events/>} />
                <Route path="/test" element={<BuildingPlan/>}/>
            </Routes>
        </Router>
    );
}

export default App;
