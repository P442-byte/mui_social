import {styled, Avatar, Box, Fab, Modal, Tooltip, Typography, colors, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { grey } from '@mui/material/colors'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
})

const Add = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
        <Tooltip title="Add" sx={{position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
            <Fab aria-label="add" color="primary" onClick={(e) => setOpen(true)}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{  position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        height: 280,
                        bgcolor: 'background.default',
                        border: '2px solid #000',
                        borderRadius: 5,
                        boxShadow: 24,
                        p: 4,
                        color: "text.primary"}}    
            >
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:grey[500], textAlign: "center"}}>
                    Create Post
                </Typography>
                <UserBox>
                    <Avatar sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <Typography variant='span' sx={{fontWeight: 500}}>Christie</Typography>
                </UserBox>
                <TextField
                    sx={{width: '100%'}}
                    id="standard-multiline-static"
                    placeholder="What's on your mind?"
                    multiline
                    rows={4}
                    variant="standard"
                />
                <Stack direction="row" sx={{gap: 1, marginTop: "10px", marginBottom: "10px"}}>
                    <EmojiEmotionsIcon color="primary" />
                    <ImageIcon color="secondary" />
                    <VideoCameraBackIcon color="success" />
                    <PersonAddIcon color="error" />
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                    <Button >Post</Button>
                    <Button sx={{width: "100px"}}><DateRangeIcon /></Button>
                </ButtonGroup>
            </Box>
        </Modal>
    </>
  )
}

export default Add