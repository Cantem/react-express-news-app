import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: '40vw',
    maxHeight: '200px',
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  media: {
    height: '200px',
    width: '200px'
  }
});

const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {article && (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            component="img"
            src={article.urlToImage}
            alt="news-img"
          />
          <CardContent>
            <Typography color="primary" variant="subtitle1">
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                {article.title}
              </a>
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {article.description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;
