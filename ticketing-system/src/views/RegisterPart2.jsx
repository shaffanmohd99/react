import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField,Select ,MenuItem,FormControl} from '@mui/material';
import {useNavigate} from "react-router-dom"
import Welcome from '../components/Welcome';
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
  
     name: yup
      .string()
      .required('Name is required'),

      role_id:yup
      .string()
      .required('Role is required'),
      
  });
const RegisterPart2=()=>{
    const {register}=useAuth();

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          role_id:'',
          name:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          register(values)
          console.log(values)
        },
      });
     
     const navigate=useNavigate()
      const click=()=>{
        navigate('/login')
      }

      
    return(
        
            <div style={{
              display:"flex",
              gap:"50px",
              marginTop:"70px"
          }}
          >
              <Welcome title={"Welcome to your ticketing system"} desc1={"Sign up or "} button={"Login"} desc2={"now"} margin="150px" click={click}/>

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
                  display:"flex"}}
                  >
                    <h1 style={{
                  fontSize:"40px",
                  margin: "10px",
                  fontWeight: "900",
                  letterSpacing: "1px",                      
              }}
                > Sign Up</h1>
                <form style={{display:"flex",flexDirection:"column",gap:"30px"}} onSubmit={formik.handleSubmit}>
                <TextField
              
              sx={{'& .MuiOutlinedInput-root': {
                 '& fieldset': {
                   border:"2px solid",
                   borderColor:"#1DA1F2"
                 }},
                 borderRadius:20
                         }}
                         color="primary"
               id="name"
               name="name"
               label="Name"
               type="text"
               value={formik.values.name}
               onChange={formik.handleChange}
               error={formik.touched.name && Boolean(formik.errors.name)}
               helperText={formik.touched.name && formik.errors.name}
               
                         />
              
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
                  select
                  color="primary"
                    id="role_id"
                    name="role_id"
                    label="Role"
                    // type="text"
                    value={formik.values.role_id}
                    // value={role}
                    onChange={formik.handleChange} 
                    error={formik.touched.role_id && Boolean(formik.errors.role_id)}
                    helperText={formik.touched.role_id && formik.errors.role_id}
              
                  >
                    
                    <MenuItem  key={1} value={1}>Admin</MenuItem>
                    <MenuItem  key={2} value={2}>User</MenuItem>
                    
                  </TextField>


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
                    {/* <FormControl>
                                <Select
                    id="role"
                    name="role"
                    value={age}
                    label="AHEHEHEHEHEHEHEEH"
                    onChange={handleChange}
                    sx={{'& .MuiOutlinedInput-input': {
              
                        border:"2px solid",
                        borderColor:"#1DA1F2"
                      }}}
              
                  >
                      <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="user">User</MenuItem>
              
                  </Select>
              
                  </FormControl>   */}
                                {/* <MyTextField id={email}/> */}
                  <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          );
}
export default RegisterPart2