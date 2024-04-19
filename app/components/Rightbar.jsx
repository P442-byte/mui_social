import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const itemData = [
  {
    img: 'https://material-ui.com/static/images/image-list/breakfast.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/burgers.jpg',
    title: 'Burger',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/camera.jpg',
    title: 'Camera',
  },
];

const Rightbar = () => {
  return (
    <Box sx={{ flex: 2, p: 2, display: { xs: "none" , sm: "block"}}}>
      <Box sx={{position: "fixed", width: 300}}>
        <Typography variant='h6' sx={{fontWeight: 300}}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/7.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/8.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </AvatarGroup>
        <Typography variant='h6' sx={{fontWeight: 300, mt: 2, mb: 2}}>Latest Photos</Typography>
        <ImageList sx={{gap: 5, width: 500, height: 175 }} cols={3} rowHeight={100}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>


        <Typography variant='h6' sx={{fontWeight: 300, mt: 2}}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/5.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/4.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar