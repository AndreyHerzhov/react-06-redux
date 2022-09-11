import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from "./types";

const initialStore = {
    books: [],
    filter: "",
}

const reducer = (store = initialStore, {type, payload}) => {
    switch(type) {
        case ADD_CONTACT:
            return {...store, books: [...store.books, payload]};
        case REMOVE_CONTACT:
            const newBooks = store.books.filter(({id}) => id !== payload);
            console.log(newBooks)
            return {...store, books: newBooks};
        case SET_FILTER:
            return {...store, filter: payload};
        default: 
            return store;
    }
}

export default reducer;