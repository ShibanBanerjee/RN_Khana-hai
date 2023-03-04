import { createSlice } from "@reduxjs/toolkit";

const favortiesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavorite = favortiesSlice.actions.addFavorite;
export const removeFavorite = favortiesSlice.actions.removeFavorite;
export default favortiesSlice.reducer;