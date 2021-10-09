import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Error = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      <Button style={{ textDecoration: 'none'}} variant="contained" size="large" color="primary">
        Go Home
      </Button>
    </Link>
  </div>
);

export default Error;
