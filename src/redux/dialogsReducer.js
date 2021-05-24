let initialState = {
    dialogsData: [
        {id: '1', name: 'Vasya'},
        {id: '2', name: 'Sveta'},
        {id: '3', name: 'Valera'},
        {id: '4', name: 'Hector'},
    ],
    messagesData: [
        {id: '1', text: 'Wassup'},
        {id: '2', text: 'Wanna eat'},
        {id: '3', text: 'And drink'},
        {id: '4', text: 'And sleep'},
    ],
};

export const addMessage = (newMessageBody) => ({type: 'ADD_MESSAGE', newMessageBody});

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            let newMessage = {
            text: action.newMessageBody,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            };
        }
        default:
            return state;
    };
};

export default dialogsReducer;
