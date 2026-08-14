import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import './index.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const EventModal = (props)=>{

    return (
        <Modal
        open={props.isEventModalOpen}
        onClose={()=>props.setIsEventModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {` EVENT ID ${props.eventId}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`EVENT ID ${props.eventId}`}
          </Typography>

          <Box className='sonia'>
            sonia more text to display
          </Box>
          <Button onClick={()=>props.setIsEventModalOpen(false)}>Close</Button>
        </Box>
      </Modal>
    )
}