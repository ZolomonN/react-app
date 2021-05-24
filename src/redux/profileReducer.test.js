
import profileReducer, { addPost, deletePost } from "./profileReducer";




it('length of post should be incremented', () => {

    //1. Test data (тестовые данные)
    let state = {
        postsData: [
            {id: '1', text: 'Hi, its me - Mario!', likes: '3'},
            {id: '2', text: 'My first post', likes: '10'},
            {id: '3', text: 'My second post', likes: '41'},
            {id: '4', text: 'My third post', likes: '23'},
        ],
    };
    let addPostFunction = addPost('hello Andrey');

    //2. Action (действие)
    let newState = profileReducer(state, addPostFunction); 


    //3. Expectation (ожидания от теста)
    expect(newState.postsData.length).toBe(5);
});

it('length of post should be decrement', () => {

    //1. Test data (тестовые данные)
    let state = {
        postsData: [
            {id: '1', text: 'Hi, its me - Mario!', likes: '3'},
            {id: '2', text: 'My first post', likes: '10'},
            {id: '3', text: 'My second post', likes: '41'},
            {id: '4', text: 'My third post', likes: '23'},
        ],
    };
    let deletePostFunction = deletePost('4');

    //2. Action (действие)
    let newState = profileReducer(state, deletePostFunction); 


    //3. Expectation (ожидания от теста)
    expect(newState.postsData.length).toBe(3);
});
