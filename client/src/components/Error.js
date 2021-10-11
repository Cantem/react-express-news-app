import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    height: '100%',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none' 
  }
});

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1>404 - Not Found!</h1>
      <Link to="/" className={classes.link}>
        <Button variant="contained" size="large" color="primary">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default Error;
