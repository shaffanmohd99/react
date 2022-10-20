import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField,Select ,MenuItem,FormControl, Dialog} from '@mui/material';
import {useNavigate} from "react-router-dom"
import Welcome from '../components/Welcome';
import axios from "axios"
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import useAuth from '../hooks/useAuth';


const validationSchema = yup.object({
      role_id:yup
      .string()
      
      
  });
const EditUser=({ID,roles})=>{
    const {token,updateUser,role}=useAuth();

    const config={
      headers:{Authorization:`Bearer ${token}`}
    }
    const roleID=(roles)=>{
      switch (roles) {
        case "admin":
          return 1
          break;
        case "user":
          return 2
          break;
        default:
          break;
      }
    }

    const formik = useFormik({
        initialValues: {
          
          role_id:roleID(roles),
          
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          updateUser(ID,values,config)
          
        },
      });
     
     
//dialog setting
const [open, setOpen] = React.useState(false);
const handleClickOpen = (e) => {
  setOpen(true);
  

  
};


const handleClose = () => {
  setOpen(false);
};


      
    return(
        <div>
            { role==='admin'?<h3  onClick={handleClickOpen} >Edit</h3>:null}
            <Dialog  maxWidth={'fit-content'}  open={open} onClose={handleClose}>
                <div style={{
                  display:"flex",
                  gap:"50px",
                  marginTop:"70px"
              }}
              >
            
                  <div style={{
                    width: "350px",
                    height: "400px",
                      borderRadius: "20px",
                      padding: "40px",
                      // boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px",
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
                    > Edit User ID: {ID}</h1>
                    <form style={{display:"flex",flexDirection:"column",gap:"30px"}} onSubmit={formik.handleSubmit}>
                    
            
                     
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
                     
                      <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                      </Button>
                    </form>
                  </div>
                </div>
                </Dialog>
        </div>
          );
}
export default EditUser