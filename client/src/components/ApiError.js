import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    height: '100%',
    textAlign: 'center'
  },
});

const Error = ({ error, loadData }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1> Oh no! Something went wrong. {error?.message}</h1>
      <Button
        onClick={loadData}
        style={{ textDecoration: 'none' }}
        variant="contained"
        size="large"
        color="primary"
      >
        Try again
      </Button>
    </div>
  );
};

export default Error;
