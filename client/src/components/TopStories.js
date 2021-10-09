import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Layout from './Layout';
import Articles from './Articles';
import { mockData } from '../api/mockData';
import { searchAllArticles } from '../api/api';

const useStyles = makeStyles({
  button: {
    marginBottom: '40px',
  }
});


export const TopStories = () => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const data = await searchAllArticles('world')
    setArticles(data);
    setLoading(false);
  }, []);

  return (
    <Layout>
      <NavLink to="/">
          <Button className={classes.button} variant="contained" size="large" color="primary">
            Go Back
          </Button>
      </NavLink>
      <Articles loading={loading} articles={articles} />
    </Layout>
  );
};

export default TopStories;
