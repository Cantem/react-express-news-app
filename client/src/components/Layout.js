import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  }
});

const Layout = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
        <Navbar />
          {children}
        <Footer />
    </div>
  );
};

export default Layout;