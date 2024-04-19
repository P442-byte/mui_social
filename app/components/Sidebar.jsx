import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React, { useContext } from 'react'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness6Icon from '@mui/icons-material/Brightness6';

const Sidebar = ({theme, themeMode, setThemeMode}) => {

  /*function handleThemeChange() {
    setMode(mode === "light" ? "dark" : "light");
  }*/


  const handleThemeChange = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light")
  }

  return (
    <Box sx={{ flex: 1, p: 2, display: {xs: "none", sm: "block"}}}>
      <Box sx={{position: "fixed"}}>
        <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href='@Home'>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='@Pages'>
                <ListItemIcon>
                  <AutoStoriesIcon />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='@Groups'>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='@Marketplace'>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='@Friends'>
                <ListItemIcon>
                  <Diversity3Icon />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='@Settings'>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='@Profile'>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='@Profile'>
                <ListItemIcon>
                  <Brightness6Icon />
                </ListItemIcon>
                <Switch onChange={(e) => handleThemeChange()}/>
              </ListItemButton>
            </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar