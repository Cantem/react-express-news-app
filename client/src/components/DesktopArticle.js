import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';
import { truncateTitle, truncateDescription } from '../utils/helpers';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '200px',
    maxHeight: '75%',
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)'
  },
  leftContainer: {
    flex: '0 1 40%',
    minHeight: '100%',
    maxWidth: '40%',
    padding: '.5e'
  },
  rightContainer: {
    flex: '0 1 60%',
    display: 'flex',
    height: '100%',
    maxWidth: '60%',
    flexDirection: 'column'
  }
}));

const DesktopArticle = ({ article }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {article && (
        <CardActionArea href={article.url} target="_blank">
          <Card className={classes.mainContainer}>
            <CardMedia
              className={classes.leftContainer}
              component="img"
              src={article.urlToImage}
              alt="news-img"
            />
            <CardContent className={classes.rightContainer}>
              <Typography color="textPrimary" variant="subtitle1">
                {truncateTitle(article.title)}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                paragraph={true}
              >
                {truncateDescription(article.description)}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      )}
    </div>
  );
};

DesktopArticle.propTypes = {
  article: PropTypes.object.isRequired
};

export default DesktopArticle;
