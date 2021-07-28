// == Import npm
import React from 'react';
import {
  Card, Icon, Image, Popup,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Article = ({ article }) => (
  <Card
    color="orange"
  >
    <Card.Content extra className="card-article-container">
      <a href="#" className="card-article-header">
        <Popup
          content="Ajouter l'article à vos favoris"
          trigger={(
            <Icon name="bookmark" size="large" />
            )}
          position="top center"
        />
      </a>
      <a href="#" className="card-article-header">
        <Popup
          content="Signaler l'article"
          trigger={(
            <Icon name="warning circle" size="large" />
         )}
          position="top center"
        />
      </a>
    </Card.Content>
    <Card
      image={ article.media ? article.media : 'https://cdn.pixabay.com/photo/2019/04/10/11/56/watercolour-4116932_960_720.png'}
      link='true'
      href={article.url}
      target="_blank"
      rel="noreferrer"
    />
    <Card.Content
    textAlign="left"
      image={article.media}
      header={article.title}
      description={ article.media ? article.site : `${article.site} : Impossible de charger l'image.`}
    />
    <Card.Content extra className="card-article-container">
      <a className="card-article-header">
        <Popup
          content="Upvoter l'article"
          trigger={(
            <Icon name="fire" size="large" color="orange" />
        )}
          position="bottom center"
        />
      </a>
      <a className="card-article-header">
        <Popup
          content="Commenter l'article"
          trigger={(
            <Icon name="commenting" size="large" />
      )}
          position="bottom center"
        />
      </a>
    </Card.Content>
  </Card>
);

// == Export
export default Article;