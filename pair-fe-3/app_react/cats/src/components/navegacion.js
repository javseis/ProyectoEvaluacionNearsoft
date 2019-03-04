import React from "react";
import { NavLink } from "react-router-dom";

const Navegacion = () => (
    <div className="nav">
        <ul className="navigation">
            <li><NavLink exact className="nav-button" to="/">Home</NavLink></li>
            <li><NavLink className="nav-button" to="/favs">Favs</NavLink></li>
        </ul>
    </div>
);

export default Navegacion;
