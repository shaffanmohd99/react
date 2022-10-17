import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField,Select ,MenuItem,FormControl, Dialog} from '@mui/material';
import {useNavigate} from "react-router-dom"
import Welcome from '../components/Welcome';
import axios from "axios"
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query"
import { get } from '../api';
import useAuth from '../hooks/useAuth';


const validationSchema = yup.object({
     title: yup
      .string(),

      description:yup
      .string(),

      priority_level_id: yup
      .string(),

      status_id:yup
      .string(),

     categories_id: yup
      .string(),
     

      assign_user_id:yup
      .string()
      // .required('Assign to user is required'),
      
  });
const EditTicket=({title,category,priorityLevel,status,description,assign,ID})=>{

  const {token,CreateNewTicket}=useAuth()
  const config={
    headers:{Authorization:`Bearer ${token}`}
  }


  const categoryID=(category)=>{
    switch (category) {
        case "Adnexio":
          return 1
          break;
        case "Decoris":
          return 2
          break;
        case "Meniaga":
          return 3
          break;
        case "Cista":
          return 4
          break;
      
        default:
          break;
      }
  }

  const priorityLevelID=(priorityLevel)=>{
    switch (priorityLevel) {
      case "high":
        return 1
        break;
      case "mid":
        return 2
        break;
      case "low":
        return 3
        break;
    
      default:
        break;
    }
  }

  const statusID=(status)=>{
    switch (status) {
      case "completed":
        return 1
        break;
      case "in-progress":
        return 2
        break;
      case "backlog":
        return 3
        break;
    
      default:
        break;
    }
  }
  

  const fetchAllUser=()=>{
    return axios.get('http://127.0.0.1:8000/api/lookup/user')
}
const {data,isLoading,isError,error,refetch,...rest}=useQuery(["user"],fetchAllUser,
{ 
    enabled:true,
}

)
 
const assignID=(assign)=>{
  data?.data.map((item)=>{ 
    if(assign===item.name){
      return item.id
    }
  }
    
    )
}




    const formik = useFormik({
      
        initialValues: {
          title: title,
          description: description,
          priority_level_id:priorityLevelID(priorityLevel),
          status_id:statusID(status),
          categories_id:categoryID(category),
          assign_user_id:'',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          console.log(values)
        //   CreateNewTicket(values,config)
        //   refetch()
          // const {data}=postRegister(values)
          // mutate(data)
         
        },
      });
    

      //dialog setting
      const [open, setOpen] = React.useState(false);
      const handleClickOpen = (e) => {
        setOpen(true);
        console.log(assign)
        console.log(data)
      
        
      };
     
    
      const handleClose = () => {
        setOpen(false);
      };

     
    return(
        <div>
            <h3  onClick={handleClickOpen} >Edit</h3>
            <Dialog maxWidth={'fit-content'} open={open} onClose={handleClose}>
                <div style={{
                  display:"flex",
                  gap:"50px"
              }}
              >
                  <div style={{
                    width: "1000px",
                    height: "auto",
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
                    > Edit Ticket ID: {ID}</h1>
                    <form style={{display:"flex",flexDirection:"column",gap:"30px"}} onSubmit={formik.handleSubmit}>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <TextField
            
                         sx={{'& .MuiOutlinedInput-root': {
                         '& fieldset': {
                           border:"2px solid",
                           borderColor:"#1DA1F2"
                         }},
                         width:"200px",
                         borderRadius:20
                                 }}
                                 color="primary"
                                       id="title"
                                       name="title"
                                       label="Title"
                                       type="text"
                                       value={formik.values.title}
                                       onChange={formik.handleChange}
                                       error={formik.touched.title && Boolean(formik.errors.title)}
                                       helperText={formik.touched.title && formik.errors.title}
                                 />
                          <TextField
                          sx={{'& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                border:"2px solid",
                                borderColor:"#1DA1F2"
                              }},
                              width:"200px",
                          }}
                              color="primary"
                              select
                            id="categories_id"
                            name="categories_id"
                            label="Category"
                            value={formik.values.categories_id}
                            onChange={formik.handleChange}
                            error={formik.touched.categories_id && Boolean(formik.errors.categories_id)}
                            helperText={formik.touched.categories_id && formik.errors.categories_id}
                          >
                            <MenuItem key={1} value={1}> Adnexio</MenuItem>
                            <MenuItem key={2} value={2}>Decoris </MenuItem>
                            <MenuItem key={3} value={3}> Meniaga</MenuItem>
                            <MenuItem key={4} value={4}>Cista </MenuItem>
                          </TextField>
                          <TextField
                           sx={{'& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                border:"2px solid",
                                borderColor:"#1DA1F2"
                              }},
                              width:"200px",
                          }}
                          color="primary"
                          select
                            id="status_id"
                            name="status_id"
                            label="Status"
                            type="text"
                            value={formik.values.status_id}
                            onChange={formik.handleChange}
                            error={formik.touched.status_id && Boolean(formik.errors.status_id)}
                            helperText={formik.touched.status_id && formik.errors.status_id}
                          >
                             <MenuItem key={1} value={1}> Completed</MenuItem>
                            <MenuItem key={2} value={2}>In-progress </MenuItem>
                            <MenuItem key={3} value={3}> Backlog</MenuItem>
                          </TextField>
                          <TextField
                           sx={{'& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                border:"2px solid",
                                borderColor:"#1DA1F2"
                              }},
                              width:"200px",
                          }}
                          color="primary"
                          select
                            id="priority_level_id"
                            name="priority_level_id"
                            label="Priority Level"
                            type="text"
                            value={formik.values.priority_level_id}
                            onChange={formik.handleChange}
                            error={formik.touched.priority_level_id && Boolean(formik.errors.priority_level_id)}
                            helperText={formik.touched.priority_level_id && formik.errors.priority_level_id}
                          >
                             <MenuItem key={1} value={1}> High</MenuItem>
                            <MenuItem key={2} value={2}>Mid </MenuItem>
                            <MenuItem key={3} value={3}> Low</MenuItem>
                          </TextField>
                    </div>
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                          <TextField
                          multiline
                           sx={{'& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                border:"2px solid",
                                borderColor:"#1DA1F2"
                              }},
                              width:"600px",
            
                          }}
            
                          color="primary"
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                          />
            
                          <TextField
            
                           sx={{'& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                border:"2px solid",
                                borderColor:"#1DA1F2"
                              }},
                              width:"200px"
            
                          }}
            
                          color="primary"
                          select
                            id="assign_user_id"
                            name="assign_user_id"
                            label="Assign To"
                            type="text"
                            value={formik.values.assign_user_id}
                            onChange={formik.handleChange}
                            error={formik.touched.assign_user_id && Boolean(formik.errors.assign_user_id)}
                            helperText={formik.touched.assign_user_id && formik.errors.assign_user_id}
                          >
                            <MenuItem key="" value="">None </MenuItem>
                            {data?.data.map((item)=>
                            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            )}
                          </TextField>
                      </div>
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
                </Dialog>
        </div>
          );
}
export default EditTicket