import { Pets } from '@mui/icons-material'
import {Box, AppBar, styled, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const SearchBar = styled("div")(({theme}) => ({
    backgroundColor: "white",
    color: "black",
    padding: "2px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}))

const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography sx={{display: {xs: "none", sm: "block"}}} variant="h6">
                SSGS
            </Typography>
            <Pets sx={{display: {xs: "block", sm: "none"}}}/>
            <SearchBar>
                <InputBase sx={{display: 'flex', color: "black"}} placeholder="Search..."/>
            </SearchBar>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
                <Avatar onClick={(e) => setOpen(true)} sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </Icons>
            <UserBox>
                <Avatar onClick={(e) => setOpen(true)} sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <Typography variant="span">Christie</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
        >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar