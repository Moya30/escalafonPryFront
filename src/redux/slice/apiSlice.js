import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({

    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://escalafon.azurewebsites.net/api/',
        mode: 'cors',
         prepareHeaders: (headers) => {
        
           headers.set('Access-Control-Allow-Origin',' *');
           headers.set('Content-Type', 'application/json;charset=UTF-8');
        //  //headers.set('Access-Control-Allow-Methods',' GET, POST, PATCH, PUT, DELETE, OPTIONS');
          //  headers.set('Access-Control-Allow-Headers','application/json');
    
            return headers;
         },
        
    }),
    endpoints: (builder) =>({
        getTasks: builder.query({
            query: () => 'cargo/'
        })
    })
}
)

export const {useGetTasksQuery} = apiSlice;