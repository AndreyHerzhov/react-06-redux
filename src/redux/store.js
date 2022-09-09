import {createStore} from "redux";

const initialStore = {
    books: [{
        id:1,
        title:"A Brief History of Humankind",
        author: "Sapiens",
        favourite: true
    },
    {
        id:2,
        title:"Young Animals",
        author: "Rachel Bladon",
        favourite: false
    }
]
}

const reducer = (store = initialStore, action) => {
    switch(action.type){
        case "ADD_BOOK":
            const newBooks = [...store.books, action.payload];
            return {...store, books: newBooks};
            default: 
            return store
    }
}

const store = createStore(reducer, initialStore)
// import reducer from "./reducer";

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*
const createStore(reducer, initialStore) => {
    const result = reducer(initialStore);
    return result;
}
*/

export default store;

 