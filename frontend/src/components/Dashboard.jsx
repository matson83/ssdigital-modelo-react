import React from "react";

const Dashboard = ({ handleLogout }) => {
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Bem-vindo à sua área restrita!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
