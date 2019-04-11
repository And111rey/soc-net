import React from 'react';
import "./app.css";
import { Route, BrowserRouter } from "react-router-dom";

import { Header } from "./components/header/header.js";
import { NavBar } from "./components/navBar/navBar.js";
import { Profile } from "./components/profile/profile.js";
import { Dialogs } from "./components/dialogs/dialogs.js"; 


const App = (props) => {

    
    return (
        <BrowserRouter>
            <div className = "app-wrapper">
                < Header />
                < NavBar /> 
                
                    < Route path="/dialogs" render={ () => < Dialogs state_d={props.state.dialogsPage}  /> } />
                    < Route path="/profile" render={ () => < Profile state = {props.state} dispatch={props.dispatch} /> }/>
                                

            </div>
        </BrowserRouter>    
    );
};

export { App };








    