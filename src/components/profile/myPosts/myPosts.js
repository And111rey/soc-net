

import React from "react";
import "./myPosts.css";
import { Post } from "./post/post.js";

const MyPosts = (props) => {


let postContent = props.state.profilePage.posts_data.map ((el) => {
    return (
        < Post name={el.mess_post} like={el.like}/>
    );
});

    let val = React.createRef();

    let sendToState = () =>{
        
        let text = val.current.value;
        // let text = document.getElementById("text").value;
        // debugger;
        props.addToState(text);
        alert(text);
        
    };
   
    return(
             <div className="postBlog">
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea  ref={val} id="text" />
                    </div>
                    <div>
                        <button  onClick={sendToState} >Add post</button>
                    </div>
                </div>
                    <div className="posts">
                        {postContent}
                    </div>
            </div>
    );
}

export { MyPosts };