import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const App = () => {
    const appStyle = {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f4f7fa',
        color: '#333',
        textAlign: 'center',
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <Router>
            <div style={appStyle}>
                <h1>Bem-vindo ao Sistema</h1>
                <nav>
                    <Link to="/login">
                        <button style={buttonStyle}>Login</button>
                    </Link>
                    <Link to="/register">
                        <button style={buttonStyle}>Registrar</button>
                    </Link>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
