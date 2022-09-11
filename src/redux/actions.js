import { nanoid } from 'nanoid';

import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from "./types"

export const addBook = (payload) => {
    return {
        type: ADD_CONTACT,
        payload: {
            id: nanoid(),
            ...payload,
        },
    }
};

export const removeBook = (payload) => {
    return {
        type: REMOVE_CONTACT,
        payload,
    }
}

export const setFilter = (payload) => {
    return {
        type: SET_FILTER,
        payload,
    }
}