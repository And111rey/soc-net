import React from 'react';
import ReactDOM from 'react-dom';

import { App } from "./app"; 
// import {  addToState }  from "./redux/state.js";
import  store from "./redux/state.js";
import { BrowserRouter } from "react-router-dom";
// import { subscribe } from "./redux/state.js";



 let rerender = (state) => {
    
        ReactDOM.render(
            <BrowserRouter>
                < App state={store.getState()} dispatch={store.dispatch.bind(store)}  />
            </BrowserRouter>, document.getElementById('root'));
};

rerender(store.getState());
store.subscribe(rerender);


    





    