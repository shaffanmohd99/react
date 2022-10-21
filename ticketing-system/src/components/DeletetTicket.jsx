import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const DeleteTicket=({ID})=>{
  const {deleteTicket,token}=useAuth()
  const config={
    headers:{Authorization:`Bearer ${token}`}
  }
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete = () => {
    setOpen(false);
    deleteTicket(ID,config)
  };
    return (
        <div>
      <h3 className=" mx-2 cursor-pointer hover:text-[red]" onClick={handleClickOpen}>Delete</h3>
      <Dialog
        open={open} 
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete Ticket ID: {ID}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}  color="primary" variant="contained">No</Button>
          <Button onClick={handleCloseDelete}   color="error" variant="contained">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default DeleteTicket