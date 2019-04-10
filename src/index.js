import React from 'react';
import ReactDOM from 'react-dom';

import { App } from "./app"; 
import {  addToState }  from "./redux/state.js";
import   { state }   from "./redux/state.js";
import { BrowserRouter } from "react-router-dom";
import { subscribe } from "./redux/state.js";



 let rerender = () => {
    
        ReactDOM.render(
            <BrowserRouter>
                < App state={state} addToState={addToState}  />
            </BrowserRouter>, document.getElementById('root'));
};


subscribe(rerender);
rerender();
// export {rerender};

    





    