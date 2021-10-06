import React, { useEffect, useState } from 'react';
import Articles from './components/Articles';
import { getArticles } from './api/api';

const App = () => {
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
      <Articles loading={loading} articles={articles} />
    </div>
  );
};

export default App;
