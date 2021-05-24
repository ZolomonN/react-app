import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        messagePage: {
            newMessageText: '',
            dialogsData: [
                {id: 1, name: 'Vasya'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Valera'},
                {id: 4, name: 'Hector'},
            ],
            messagesData: [
                {text: 'Wassup'},
                {text: 'Wanna eat'},
                {text: 'And drink'},
                {text: 'And sleep'},
            ],
        },
        profilePage: {
            newPostText: '',
            postsData: [
                {id: '1', text: 'Hi, its me - Mario!', likes: '3'},
                {id: '2', text: 'My first post', likes: '10'},
                {id: '3', text: 'My second post', likes: '41'},
                {id: '4', text: 'My third post', likes: '23'},
            ],
        },    
        sidebar: {
            friendsList: [
                {name: 'Adam', year: '32'},
                {name: 'Marshal', year: '21'},
                {name: 'Henry', year: '32'},
            ]
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    connectWithStore(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber();
    },
};

window.state = store;
export default store;