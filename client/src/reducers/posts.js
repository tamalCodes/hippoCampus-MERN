// a reducer is a function that accepts state as well as actions (state is named as 'posts')
// then based on the action type it performs the logic

// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// export default (posts = [], action) => {

//     switch (action.type) {

//         case FETCH_ALL:
//             return action.payload;

//         case LIKE:
//             return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

//         case CREATE:
//             return [...posts, action.payload];

//         case UPDATE:
//             return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

//         case DELETE:
//             return posts.filter((post) => post._id !== action.payload);

//         default:
//             return posts;
//     }


export default (posts = [], action) => {

    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;



        case 'CREATE':
            return [...posts, action.payload];



        default:
            return posts;
    }
}