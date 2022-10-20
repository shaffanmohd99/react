import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DisplayTicket from './DisplayTicket';


export default function MyTickets() {

    const {token}=useAuth()
    
const config={
  headers:{Authorization:`Bearer ${token}`}
}
const FetchMyTicket=()=>{
  return axios.get('https://ticker-heroku.herokuapp.com/api/ticket',config)
}
const {data,isLoading,isError,error,refetch,...rest}=useQuery(["myTicket"],FetchMyTicket,
{ 

  enabled:true,
    
})


  return (
    <div>
      <div className='w-[auto]  justify-items-center hidden sm:flex'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{backgroundColor:"#1DA1F2"}}>
                <TableCell sx={{color:"white"}}>Ticket ID</TableCell>
                <TableCell sx={{color:"white"}} align="left">Title</TableCell>
                <TableCell  sx={{color:"white",width:"300px"}} align="left">Description</TableCell>
                <TableCell  sx={{color:"white"}} align="left">Category</TableCell>
                <TableCell sx={{color:"white"}} align="left">Priority Level</TableCell>
                <TableCell sx={{color:"white"}} align="left">Status</TableCell>
                <TableCell  sx={{color:"white"}} align="left">Assign To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
                {
                    data?.data.map((item)=>
                    <TableRow>
                         <TableCell  >{item.ticket_id}</TableCell>
                        <TableCell sx={{textTransform:"capitalize"}}component="th" scope="row" align="left">{item.title}</TableCell>
                        <TableCell sx={{width:"100px",textTransform:"capitalize"}} align="left">{item.description}</TableCell>
                        <TableCell sx={{textTransform:"capitalize"}} align="left">{item.category}</TableCell>
                        <TableCell sx={{textTransform:"capitalize"}}align="left">{item.priority_level}</TableCell>
                        <TableCell sx={{textTransform:"capitalize"}}align="left">{item.status_type}</TableCell>
                        <TableCell  align="left">{item.assigned_to}</TableCell>
      
                    </TableRow>
                    )
                }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='flex sm:hidden' style={{
                width:"100%",
                padding:"20px",
                marginTop:"px",
            
                flexWrap:"wrap",
                justifyContent:"center",
                gap:"30px"
                }}>
      {data?.data.map((item)=>
                    
                    <DisplayTicket ID={item.ticket_id} title={item.title} assign={item.assigned_to} category={item.category} status={item.status_type
                    } priorityLevel={item.priority_level
                    } description={item.description}/>
                )}
      </div>
    </div>
  );
}
