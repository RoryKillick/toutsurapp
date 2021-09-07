// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';

// == Import CSS
import './styles.scss';

// == Composant
const Article = ({ article }) => (
  
  <a
    href={article.link}
    target="_blank"
    rel="noreferrer"
  >
    <Card
      className="card-article"
      image={ article.media ? article.media : 'https://cdn.pixabay.com/photo/2020/04/19/08/17/watercolor-5062356__340.jpg'}
      header={`${article.title}`}
      description={ article.media ? article.site : `${article.site} : Impossible de charger l'image.`}
      color="blue"
      align="left"
    />
  </a>
);

// == Export
export default Article;
