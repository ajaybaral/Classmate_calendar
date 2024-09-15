import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CalendarPage from './pages/CalendarPage';
import Navbar from './components/Navbar'

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Navbar />} />
                
                <Route path="/login" element={<LoginPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
            </Routes>
        </Router>
    );
}

export default App;
