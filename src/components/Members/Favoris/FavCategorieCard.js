// == Import npm
import React from 'react';
import {
  Card, Icon, Image, Popup, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const FavCategorieCard = ({ categorie }) => {
  const oneDeleteClick = () => {
    console.log('Non on ne supprime pas. Pas encore...');
  };

  return (
    <Card color={categorie.color}>
      <Card.Content extra className="card-article-container">
        <a className="card-article-header">
          <Popup
            content="Supprimer la catégorie"
            trigger={(
              <Icon name="close" size="large" color="red" onClick={oneDeleteClick} />
         )}
            position="top center"
          />
        </a>
      </Card.Content>
      <Image src={categorie.picture} wrapped ui={false} />
      <Card.Content>
        <Card.Header>#{categorie.name}</Card.Header>
      </Card.Content>

    </Card>
  );
};

// == Export
export default FavCategorieCard;