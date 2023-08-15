import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useGetTasksQuery } from '../redux/slice/apiSlice';

export const ChatIA = () => {

  const {data, isError} = useGetTasksQuery();
  console.log(data);
  console.log(isError);
  return (
    <>
    <Helmet>
        <title> Facultades | Escalafón </title>
      </Helmet>
      <div>{JSON.stringify(data)}</div>
      <div>{isError}</div>
    </>
    
  )
}


