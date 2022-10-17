import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField,Select ,MenuItem,FormControl} from '@mui/material';
import {useNavigate} from "react-router-dom"
import Welcome from '../components/Welcome';
import { useState } from 'react';
import axios from "axios"
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import useAuth from '../hooks/useAuth';



const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
      
  });
const LoginPart2=()=>{


  const {login,errorLogin}=useAuth();


    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          login(values)
          

        },
      });
  
      
     const navigate=useNavigate()
      const click=()=>{
        navigate('/register')
      }

     

    
    return(
        
            <div style={{
              display:"flex",
              gap:"50px",
              marginTop:"70px"
          }}
          >
          <Welcome  margin="150px" title={"Do not have an account yet?"} desc1={""} button={"Sign Up"} desc2={"now"} click={click}/>

              <div style={{
                width: "350px",
                height: "600px",
                  borderRadius: "20px",
                  padding: "40px",
                  boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px",
                  background: "#ecf0f3",
                  flexDirection:"column",
                  alignContent:"center",
                  justifyContent:"center",
                  display:"flex",
                  
                }}
                  >
                    <h1 style={{
                  fontSize:"40px",
                  margin: "10px",
                  fontWeight: "900",
                  letterSpacing: "1px",                      
              }}
                > Login</h1>
                <form style={{display:"flex",flexDirection:"column",gap:"30px"}} onSubmit={formik.handleSubmit}>
              
              
                  <TextField
                  sx={{'& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border:"2px solid",
                        borderColor:"#1DA1F2"
                      }},
                  }}
                      color="primary"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
              
                  />
                 
                  <TextField
                   sx={{'& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border:"2px solid",
                        borderColor:"#1DA1F2"
                      }},
                  }}
                  color="primary"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
              
                  />
                   
                             
                  <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                  </Button>
                  <h3 style={{fontSize:"15px",textAlign:"center"}} >{errorLogin}</h3>
                </form>
              </div>
            </div>
          );
}
export default LoginPart2