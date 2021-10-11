import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Layout from './Layout';
import Articles from './Articles';
import ApiError from './ApiError';
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

  const [error, setError] = useState(null);

  const searchArticles = async () => {
    setLoading(true);
    try {
      const data = await searchAllArticles('world', page, perPage);
      setTotalPages(data.totalResults);
      setArticles([...articles, ...data.articles]);
      setError(null);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };


  useEffect(async () => {
    searchArticles();
  }, [page]);

  return (
    <Layout>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Button className={classes.button} variant="contained" size="large" color="primary">
            Go Back
          </Button>
      </NavLink>
      {error ? (
        <ApiError error={error} loadData={searchArticles}></ApiError>
      ) : (
        <Articles loading={loading} articles={articles} />
      )}
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
