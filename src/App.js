import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';
import Error from './pages/Error';
import './styles/App.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/about" element={
                    <About />
                } />
                <Route path="/posts" element={
                    <Posts />
                } />
                <Route path="/error" element={
                    <Error />
                } />
                <Route
                    path="*"
                    element={<Navigate to="/error" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
