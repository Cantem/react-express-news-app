import React, { useState } from 'react';
import {
  Drawer,
  Divider,
  IconButton,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ReorderIcon from '@material-ui/icons/Reorder';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  button: {
    color: 'white',
    padding: '12px 12px 12px 0',
  },
  paper: {
    background: '#303f9f'
  },
  text: {
    textTransform: 'uppercase',
  }
}));

const MobileDrawer = () => {
  const classes = useStyles();
  const [openDrawer, setDrawerState] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerState(true);
  };
  const handleDrawerClose = () => {
    setDrawerState(false);
  };

  return (
    <>
      <div>
        <IconButton className={classes.button} onClick={handleDrawerOpen}>
          {!openDrawer ? <ReorderIcon /> : null}
        </IconButton>
      </div>
      <Divider />
      <Drawer
        variant="temporary"
        open={openDrawer}
        onClose={handleDrawerClose}
        // todo find a different way to change drawer background colour
        classes={{ paper: classes.paper }}
      >
        <Link to="/" className={classes.link}>
          <List>
            <ListItem button key="Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText className={classes.text} primary="Home" />
            </ListItem>
          </List>
        </Link>
        <Link
          to="/top-stories"
          className={classes.link}
        >
          <List>
            <ListItem button key="Top Stories">
              <ListItemIcon>
                <AnnouncementIcon />
              </ListItemIcon>
              <ListItemText className={classes.text} primary="Top Stories" />
            </ListItem>
          </List>
        </Link>
        <Link to="/signup" className={classes.link}>
          <List>
            <ListItem button key="Signup">
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText className={classes.text} primary="Singup" />
            </ListItem>
          </List>
        </Link>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
