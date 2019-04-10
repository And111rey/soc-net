
import React from "react";
import "./dialogs.css";
import { Route, BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { Dialog_Item } from "./dialog_item/dialogs_item.js";
import { Message } from "./message/message.js"

const Dialogs = (props) => {

   
let dialods_elements = props.state_d.dialogs_data.map((el) => {
    return(
        < Dialog_Item name={el.name} id={el.id} />
    );
});

       

let messages_item = props.state_d.mess_data.map((el) => {
    return(
            < Message  mess={el.mess} id={el.id} />
        );
});

    return (
        <div className="contentM">

            <div className="dialogs">
                   {dialods_elements}
                  
            </div>

            <div className="messages">               
                {messages_item}
            </div>
            
        </div>
    );
}

export { Dialogs };