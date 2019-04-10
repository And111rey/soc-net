
import React from "react";
import "./../dialogs.css";
import { NavLink } from "react-router-dom";



const Dialog_Item = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="dia">
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
};


export { Dialog_Item };