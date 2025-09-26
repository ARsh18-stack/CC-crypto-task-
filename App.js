import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CoinsList from './CoinsList';
import CoinDetails from './CoinDetails';
import Watchlist from './Watchlist';
import './DarkMode.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark', !isDarkMode);
    };

    return (
        <Router>
            <div className={`App ${isDarkMode ? 'dark' : ''}`}>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/watchlist">Watchlist</Link>
                    <div className="dark-mode-toggle">
                        <input
                            type="checkbox"
                            id="dark-mode-toggle"
                            onChange={toggleDarkMode}
                            checked={isDarkMode}
                        />
                        <label htmlFor="dark-mode-toggle"></label>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<CoinsList />} />
                    <Route path="/coin/:id" element={<CoinDetails />} />
                    <Route path="/watchlist" element={<Watchlist />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;