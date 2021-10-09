import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Footer from './Footer';
import Articles from './Articles';
import { getArticles, searchAllArticles } from '../api/api';
import { mockData } from '../api/mockData';
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

const Container = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(mockData);

  const searchArticles = async (text) => {
    setLoading(true);
    const data = await searchAllArticles(text);
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    const getTopArticles = async () => {
      setLoading(true);
      const data = await getArticles();
      setArticles(data);
      setLoading(false);
    };
    getTopArticles();
  }, []);

  return (
    <div className={classes.container}>
        <Navbar />
        <Searchbar searchArticles={searchArticles} />
        <Articles loading={loading} articles={articles} />
        <Footer />
    </div>
  );
};

export default Container;