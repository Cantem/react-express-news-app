import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Article from './Article.js';
import PropTypes from 'prop-types';


const useStyles = makeStyles({
  container: {
    maxWidth: '50vw'

  },
  // @todo add fixed height container and fix spinner position
    loader: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  }
});

export default function Articles({ loading, articles }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress className={classes.loader} variant="indeterminate" />
      ) : (
        <div className={classes.root}>
          <Grid
            container
            spacing={3}
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
