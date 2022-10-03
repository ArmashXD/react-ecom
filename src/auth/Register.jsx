import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Input from '../components/Input';
import { RegisterFields, RegisterBtn } from './Auth';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function Register() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(data);
  return (
    <div>
      <Button onClick={handleOpen} variant="outline">
        SignUp
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <Typography variant="h4" component="h2">
            SignUp
          </Typography>
          <Input fields={RegisterFields} Btn={RegisterBtn} setData={setData} />
        </Box>
      </Modal>
    </div>
  );
}
