import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Footer from './Footer';
import Articles from './Articles';
import { getArticles, searchAllArticles } from '../api/api';
import { mockData } from '../api/mockData';

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(mockData);
  const styles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  };

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
    <div style={styles}>
        <Navbar />
        <Searchbar searchArticles={searchArticles} />
        <Articles loading={loading} articles={articles} />
        <Footer />
    </div>
  );
};

export default Container;