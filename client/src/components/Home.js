import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Searchbar from './Searchbar';
import Articles from './Articles';
import Layout from './Layout';
import { getArticles, searchAllArticles } from '../api/api';
import { mockData } from '../api/mockData';

const useStyles = makeStyles({
  button: {
    marginBottom: '40px',
  },
});


const Home = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const perPage = 5;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const searchArticles = async (text) => {
    setLoading(true);
    const data = await searchAllArticles(text, page, perPage);
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    const getTopArticles = async () => {
      setLoading(true);
      const data = await getArticles(page, perPage);
      setTotalPages(data.totalResults);
      setArticles([...articles, ...data.articles]);
      setLoading(false);
    };
    getTopArticles();
  }, [page]);

  return (
    <Layout>
      <Searchbar searchArticles={searchArticles} />
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

export default Home;