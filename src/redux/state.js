



let store ={
    _state: {

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
       
    },
    getState () {
        return this._state;
    },
    rerender () {
        console.log ("State was changed");
    },
    // addToState (text)  {
    //     let newArr = {
    //         id: 5,
    //         mess_post: text,
    //         like: 5
    //     };
    //     this._state.profilePage.posts_data.push(newArr);
    //     this.rerender(this._state);
    // },
    subscribe (observer) {
        this.rerender = observer;
    },
    dispatch (action) {
        
        if(action.type == "ADD-POST") {
            let newArr = {
                id: 5,
                mess_post: action.text,
                like: 5
            };
            this._state.profilePage.posts_data.push(newArr);
            this.rerender(this._state);
        } else {
            alert("Что-то не так )))))");
        };
    }
};



export default store;
// window.store = store;


