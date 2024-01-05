import React from "react";
import './layout.css';



function Sidebar() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));

    return (
        <div className="">
            <div className="dashboard-sidebar">
                <div className="dashboard-user-image">
                    <img src={`http://localhost/reactcrud/${userLogged.image}`} alt=""/></div>

                <a className="navbar-brand" href="#">
                    Hi, {userLogged.name}
                </a>
                <hr style={{ background: "#fffffff" }} />
                <a href="/dashboard" className="dashboard-nav-link">Admin Dashboard</a>
                <a href="./" className="dashboard-nav-link">Home</a>
                <a href="./construction" className="dashboard-nav-link">Construction</a>
                <a href="./shops" className="dashboard-nav-link">Shop</a>
                <a href="./teams" className="dashboard-nav-link">Team-Members</a>
                <a href="./teammember" className="dashboard-nav-link">Team-Leader</a>
                <a href="./order" className="dashboard-nav-link">Order</a>
                
                



            </div>

        </div>
    )
}

export default Sidebar;
