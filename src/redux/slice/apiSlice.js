import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { useState } from 'react';

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
            query: () => 'facultad/'
        })
    })
}
)

export const {useGetTasksQuery} = apiSlice;

export const getFacultad= async()=>{
    console.log('buenas')
    const response = await fetch('https://escalafon.azurewebsites.net/api/facultad',{
        headers: {
            'Access-Control-Allow-Origin':' *',
           'Content-Type':'application/json;charset=UTF-8'
        }
    })

    const {data} = await response.json()

    return data
}

export const getUsuario= async()=>{
    const response = await fetch('https://escalafon.azurewebsites.net/api/usuario',{
        headers: {
            'Access-Control-Allow-Origin':' *',
           'Content-Type':'application/json;charset=UTF-8'
        }
    })

    const {data} = await response.json()

    return data
}

const API_KEY = "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";

export const getCompletion = async(prompt)=>{
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      // prompt: "give a random example of programming language",
      prompt: prompt ?? "",
      max_tokens: 20,
    }),
  });

  const data = await response.json();
  // console.log(data)
  return data;
}