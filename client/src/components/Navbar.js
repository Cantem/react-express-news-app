import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ModalDialog from './ModalDialog';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    marginBottom: 40
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          React News App
        </Typography>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color='inherit'>
              Home
            </Button>
          </Link> 
          <Link to='/top-stories' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color='inherit'>
              Top Stories
            </Button>
          </Link>
        <Button color="inherit" onClick={handleOpen}>
          Signup
        </Button>
      </Toolbar>
      <ModalDialog open={open} handleClose={handleClose} />
    </AppBar>
  );
};

export default Navbar;
