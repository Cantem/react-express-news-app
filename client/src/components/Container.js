import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Articles from './Articles';
import { getArticles } from '../api/api';

const Container = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const styles = {
    backgroundColor: '#e9ebf0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
      <Articles loading={loading} articles={articles} />
      <Footer />
    </div>
  );
};

export default Container;