import React from "react";
import { useLocation } from "react-router-dom";
import '../../styles/dashboard/welcomeSection.css'



const WelcomeSection =() =>{
    const location = useLocation();
    const username = location.state?.username;

    return(
        <div className="welcome-section">
            <h1>
                Hello, <span className="username">{username}</span>, <span className="start-planning">Start planning today</span>
            </h1>
        </div>
    );
};

export default WelcomeSection;