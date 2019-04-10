import React from 'react';
import ReactDOM from 'react-dom';

import { App } from "./app"; 
import state  from "./redux/state.js";
import { addPost } from "./redux/state.js";


// addPost("HEllo yo!!! fuck");
export let rerenderEntireTree= () => {

ReactDOM.render(< App state={state} addPost={addPost} />, document.getElementById('root'));
};
rerenderEntireTree();
