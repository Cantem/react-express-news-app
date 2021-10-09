import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Article from './Article.js';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    maxWidth: '50vw',
    display: 'flex',
    flex: 1,
    marginBottom: '40px',

  },
  loader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default function Articles({ loading, articles }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress className={classes.loader} size={60} variant="indeterminate" />
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
            {articles.map((article, index) => (
              <Grid item xs={12} key={index}>
                <Article article={article} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
}

Articles.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired
};
