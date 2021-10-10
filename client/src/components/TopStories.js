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

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const perPage = 5;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    setLoading(true);
    const data = await searchAllArticles('world', page, perPage)
    setTotalPages(data.totalResults);
    setArticles([...articles, ...data.articles]);
    setLoading(false);
  }, [page]);

  return (
    <Layout>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Button className={classes.button} variant="contained" size="large" color="primary">
            Go Back
          </Button>
      </NavLink>
      <Articles loading={loading} articles={articles} />
      {totalPages !== page && (
        <Button
          className={classes.button}
          onClick={() => setPage(page + 1)}
          variant="contained"
          color="primary"
        >
          {loading ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </Layout>
  );
};

export default TopStories;
