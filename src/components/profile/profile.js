

import React from "react";
import "./profile.css";
import { MyPosts } from "./myPosts/myPosts.js";
import { ProfileInfo } from "./profile-info/profile-info.js";

const Profile = (props) => {

    
    return(
        <div className="content">
            < ProfileInfo />
            < MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export { Profile };