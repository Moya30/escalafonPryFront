import React, { useState } from 'react'
import { TextField, Button, ListItemButton, ListItemText } from '@mui/material';
import { getCompletion } from '../redux/slice/apiSlice';


export function ChatIA(){
  return (
    <>
    <Formulario/>
    </>
    
  )
}
function Formulario(){
  const [ message, setMessage ] = useState('')
  const [ chats, setChats ] = useState([])
  const [ id, setId ] = useState('')


  const handleSubmit = async(event)=>{
    event.preventDefault()
    if (message.length < 2){

      alert('El mensaje debe contener almenos tres caractares')

    }else{
      try {
        const response = await getCompletion(message)
        setChats(response.choices)
        setId(response.id)
      } catch (error) {
        console.log(error)
      }
    }
  }
    return (
      <>
      <form autoComplete="off" onSubmit={handleSubmit} style={{width:"50%", margin: "0 auto"}}>
          <h2>Chat</h2>
              <TextField 
                  label="Escriba algo"
                  onChange={e => setMessage(e.target.value)}
                  required
                  variant="outlined"
                  color="secondary"
                  type="text"
                  sx={{mb: 3}}
                  fullWidth
               />
               <Button variant="outlined" color="secondary" type="submit">Enviar</Button>
           
      </form>
      {chats.map((chat)=>(
          <div style={{width:"50%", margin: "0 auto", paddingTop:'30px'}} key={id}>
            <ListItemButton component="a" href="#simple-list">
            <ListItemText primary={chat.text} />
          </ListItemButton>
          </div> 
      ))}
      </>
    )
}