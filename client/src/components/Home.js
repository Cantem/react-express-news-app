import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import Articles from './Articles';
import Layout from './Layout';
import { getArticles, searchAllArticles } from '../api/api';
import { mockData } from '../api/mockData';


const Home = () => {
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
    <Layout>
      <Searchbar searchArticles={searchArticles} />
      <Articles loading={loading} articles={articles} />
    </Layout>
  );
};

export default Home;