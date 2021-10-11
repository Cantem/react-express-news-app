import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from './Searchbar';
import Articles from './Articles';
import Layout from './Layout';
import ApiError from './ApiError';
import { getArticles, searchAllArticles } from '../api/api';
import { mockData } from '../api/mockData';

const useStyles = makeStyles({
  button: {
    marginBottom: '40px'
  }
});

const Home = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const perPage = 5;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [error, setError] = useState(null);

  const searchArticles = async (text) => {
    setLoading(true);
    try {
      const data = await searchAllArticles(text, page, perPage);
      setTotalPages(data.totalResults);
      setArticles([...data.articles]);
      setError(null);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  const getTopArticles = async () => {
    setLoading(true);
    try {
      const data = await getArticles(page, perPage);
      setTotalPages(data.totalResults);
      setArticles([...articles, ...data.articles]);
      setError(null);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    getTopArticles();
  }, [page]);

  return (
    <Layout>
      <Searchbar searchArticles={searchArticles} />
      {error ? (
        <ApiError error={error} loadData={getTopArticles}></ApiError>
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

export default Home;
