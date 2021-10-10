import * as React from 'react';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import CardMedia from '@material-ui/core//CardMedia';
import Typography from '@material-ui/core//Typography';
import { CardActionArea } from '@material-ui/core/';
import { truncateTitle, truncateDescription } from '../utils/helpers';


const ActionAreaCard = ({ article }) => {
  const articleDescription = article.description
  ? article.description
  : article.content;
const articleImage = article.urlToImage
  ? article.urlToImage
  : 'https://image.shutterstock.com/image-photo/news-virtual-set-studio-chroma-600w-1694098984.jpg';
  return (
    article && (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href={article.url} target="_blank">
          <CardMedia
            component="img"
            src={articleImage}
            alt="news-img"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {truncateTitle(article.title)}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {truncateDescription(articleDescription)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  );
}

export default ActionAreaCard;
