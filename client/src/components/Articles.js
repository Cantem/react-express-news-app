import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Article from './Article.js';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#fafafa'
  },
  media: {
    height: 500
  },
  container: {
    display: 'grid',
    justifyContent: 'center'
  }
});

export default function Articles({ loading, articles }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={classes.root}>
          <Grid
            container
            spacing={3}
            direction={'column'}
            justifyContent={'center'}
          >
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
