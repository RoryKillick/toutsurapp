// == Import npm
import React from 'react';
import {
  Card, Icon, Image, Popup, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const FavCategorieCard = ({ categorie, onDeleteClick }) => (
  <Card color={categorie.color}>
    <Image src={categorie.picture} wrapped ui={false} />
    <Card.Content>
      <Card.Header>#{categorie.name}</Card.Header>
    </Card.Content>
    <Card.Content className="card-article-header">
      <Link id={categorie.id} onClick={onDeleteClick} name={categorie.id} circular>Supprimer des favoris</Link>
    </Card.Content>
  </Card>
);

// == Export
export default FavCategorieCard;
