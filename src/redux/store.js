import {configureStore} from '@reduxjs/toolkit';
import { pokemonSlice } from './service/pokemonSlice';

export const store = configureStore({
    reducer: {
        [pokemonSlice.reducerPath]: pokemonSlice.reducer

    },
    middleware:  (getDefaultmiddleware)=> getDefaultmiddleware().concat(pokemonSlice.middleware)
})
