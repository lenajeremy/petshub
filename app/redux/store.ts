import { createSlice, PayloadAction, configureStore, Store } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import petsApi from "../api/petsApi";


const initialState: string[] = []

const likedPets = createSlice({
    name: 'likedPets',
    initialState,
    reducers: {
        likePet(state, action: PayloadAction<string>) {
            state.push(action.payload)
            return state;
        },

        dislikePet(state, action: PayloadAction<string>) {
            const index = state.findIndex((pet => action.payload === pet));

            console.log(index)
            state.splice(index, 1);

            return state
        },

        updateLikedPets(state, action: PayloadAction<string[]>) {
            state = action.payload;

            return state;
        }
    }

})



const store = configureStore({
    reducer: {
        [likedPets.name]: likedPets.reducer,
        [petsApi.reducerPath]: petsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(petsApi.middleware)
})


export const { likePet, dislikePet, updateLikedPets } = likedPets.actions


export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;