// == Import npm
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import CSS
import './styles.scss';

// == Composant
const FavCategorieCard = ({ categorie, onDeleteClick, onCategorieSelected }) => (
  <Card  color={categorie.color} className="card-categorie">
    <Link
    to="/articles"
    onClick={onCategorieSelected}
    name={categorie.name}
    id={categorie.id}
    as="a"
    >
      <Card className="card-categorie">
        <Image src={categorie.picture} wrapped ui={false} />
        <Card.Content className="card-categorie-header">
          <Card.Header>#{categorie.name}</Card.Header>
        </Card.Content>
      </Card>
    </Link>
      <Card.Content className="card-categorie-button">
        <Link id={categorie.id} onClick={onDeleteClick} name={categorie.id} circular>Supprimer des favoris</Link>
      </Card.Content>
  </Card>
);

// == Export
export default FavCategorieCard;
