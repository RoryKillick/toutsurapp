// == Import npm
import React from 'react';
import {
  Card, Icon, Popup, Label,
} from 'semantic-ui-react';
import axios from 'axios';

// == Import
import './styles.scss';

// == Composant
const Article = ({ article, setUserBookmarksArticles }) => {

// == Function for bookmark an article
  const addFavoriteArticle = async () => {
    try {
      const FavoriteArticleAdded = await axios({
        method: 'put',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/articles',
        data: {
          title: article.title,
          picture: article.media,
          URL: article.url,
        },
      });
      console.log(FavoriteArticleAdded);
      if (FavoriteArticleAdded.data.length === 0) {
        setUserBookmarksArticles(null);
      }
      else {
        setUserBookmarksArticles(FavoriteArticleAdded.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card
      color="teal"
    >
      <Card.Content extra className="card-article-container">
        <a className="card-article-header">
          <Popup
            content="Ajouter l'article à vos favoris"
            size="small"
            trigger={(
              <Icon
                size="large"
                name="bookmark"
                onClick={addFavoriteArticle}
              />
            )}
            position="top center"
          />
        </a>
      </Card.Content>
      <Card
        image={article.media ? article.media : 'https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolour-4116932_960_720.png'}
        link="true"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      />
      <Label
        color="grey"
        attached="top right"
        as="a"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >{article.site}
      </Label>
      <Card.Content
        link="true"
        href={article.url}
        target="_blank"
        rel="noreferrer"
        textAlign="left"
        image={article.media}
        header={article.title}
        description={article.media ? '' : 'Impossible de charger l\'image.'}
      />
    </Card>
  );
};

// == Export
export default Article;
