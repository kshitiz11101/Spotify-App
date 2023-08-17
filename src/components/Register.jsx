import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../services/api-client';
export const Register = () => {
    const [message, setMessage] = useState('');
    const emailRef = useRef();
    const pwdRef = useRef();
    const nameRef = useRef();
    const phoneRef = useRef();
    const doRegister = async ()=>{
        const userInfo = {
            'email': emailRef.current.value,
            'password': pwdRef.current.value,
            'name': nameRef.current.value,
            'phone': phoneRef.current.value,
        }
        console.log(userInfo);
        try{
        const response = await apiClient.post("/register", userInfo);
        setMessage(response.data.message);
        console.log(response);
        console.log('Response is ', response);
        console.log('UserInfo ', userInfo);
        }
        catch(err){
            setMessage('Register Fail...');
            console.log('Error is ', err);
        }
    }
  return (
   <Container >
    <p>{message}</p>
    <TextField inputProps={{ style: { color: 'white' } }} inputRef = {emailRef} id="outlined-basic" label="Email" variant="outlined"  />
    <TextField inputRef = {pwdRef} id="outlined-basic" type="password" label="Password" variant="outlined"  inputProps={{ style: { color: 'white' } }}/>
    <TextField style={{color:'white'}} inputRef = {nameRef} id="outlined-basic" label="Name" variant="outlined" />
    <TextField style={{color:'white'}} inputRef = {phoneRef} id="outlined-basic" label="Phone" variant="outlined" />
    <Button onClick={doRegister} variant="contained">Register</Button>
   </Container>
  )
}
