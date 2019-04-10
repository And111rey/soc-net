

// import {rerender } from "../index.js";

let rerender = () => {
    console.log ("State was changed");
};

let state = {

    profilePage: {
        posts_data: [
            {id:0, mess_post: "Hi, how are you", like: 21},
            {id:1, mess_post: "nice day... ", like: 12},
            {id:2, mess_post: "yo !!!", like: 21},
            {id:3, mess_post: "hello bro ", like: 1}
        ],
        newPostText: "it-kamasutra"
    }
   ,
   dialogsPage: {

        dialogs_data: [
            {id: 0, name: "Korry"},
            {id: 1, name: "Maderos"},
            {id: 2, name: "Venger D."},
            {id: 3, name: "Shach"},
            {id: 4, name: "Gorod"},
            {id: 5, name: "Shudryk"}
            ],

        mess_data: [
            {id: 0, mess: "Hi"},
            {id: 1, mess: "Hello, what is news"},
            {id: 2, mess: "In what time yiu tomorrow?"},
            {id: 3, mess: "So what?"},
            {id: 4, mess: "... I am busy"},
            {id: 5, mess: "CAll me , and send me thet Foros... "}
        ]
   }
   
};

export let addToState = (text) => {
    let newArr = {
        id: 5,
        mess_post: text,
        like: 5
    };
    state.profilePage.posts_data.push(newArr);
    rerender(state);
};

export const subscribe = (observer) => {
    rerender = observer;
};



console.log(state.profilePage.posts_data);

// export { subscribe };
export { state} ;

