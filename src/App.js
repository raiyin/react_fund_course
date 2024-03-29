import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import './styles/App.css';
import { useEffect } from 'react';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);


    return (
        < AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider >
    );
}

export default App;
