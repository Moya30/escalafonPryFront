import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const pokemonSlice = createApi({
    reducerPath: 'pokemonapi',
    baseQuery: fetchBaseQuery({

         baseUrl: 'https://pokeapi.co/api/v2/ '
    }),
    endpoints: (builder)=>(
        {
            getPokemon: builder.query({
                query: ()=>'pokemon/ditto'
            })
        }
    )
})

export const { useGetPokemonQuery } = pokemonSlice