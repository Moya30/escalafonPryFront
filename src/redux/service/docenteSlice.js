import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const docenteSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({

         baseUrl: 'escalafon.azurewebsites.net/api/'
        
    }),
    endpoints: (builder)=>(
        {
            getDocente: builder.query({
                query: ()=>'usuario/'
            })
        }
    )
})

export const { useGetDocenteQuery } = docenteSlice