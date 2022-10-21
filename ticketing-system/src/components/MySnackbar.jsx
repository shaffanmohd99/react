import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MySnackbar({opening}) {
  const [open, setOpen] = React.useState(true);
  const [display,setDisplay]=React.useState("flex")

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    // setDisplay("none");
  };

  return (
    <Stack spacing={2} sx={{ width: '20%' }}>
      
    <div style={{display:display}}>
      
          <Alert onClose={handleClose}  color='primary'severity="success" sx={{ width: '100%' }}>
            Create ticket succesful
          </Alert>
    </div>
      
     
    </Stack>
  );
}
