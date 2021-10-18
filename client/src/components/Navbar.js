import React, { useState } from 'react';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ModalDialog from './ModalDialog';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'start'
  },
  appBar: {
    marginBottom: 40
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const useMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar >
        {useMobile && <Drawer/>}
        <Typography variant="h6" className={classes.title}>
          React News App
        </Typography>
        {!useMobile && (
          <>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link
              to="/top-stories"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Button color="inherit">Top Stories</Button>
            </Link>
            <Button color="inherit" onClick={handleOpen}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
      <ModalDialog open={open} handleClose={handleClose} />
    </AppBar>
  );
};

export default Navbar;
