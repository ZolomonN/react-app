let initialState = {
    friendsList: [
        {id:'1', name: 'Adam', year: '32'},
        {id:'2', name: 'Marshal', year: '21'},
        {id:'3', name: 'Henry', year: '32'},
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer