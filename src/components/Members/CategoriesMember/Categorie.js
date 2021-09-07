// == Import npm
import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import CSS
import './styles.scss';

// == Composant

const Categorie = ({
  categorie, onCategorieSelected, onBookmarkACategorie, userBookmarksCategoriesPage, isfavorite,
}) => (
  <Card color={categorie.color} className="card-categorie">
    <Link
      to="/articles"
      onClick={onCategorieSelected}
      name={categorie.name}
      id={categorie.id}
      as="a"
    >
      <Card name={categorie.name} className="card-categorie">
        <Image src={categorie.picture} />
        <Card.Content>
          <Card.Header>#{categorie.name}</Card.Header>
        </Card.Content>
      </Card>
    </Link>
    <Card.Content>
      <Link name={categorie.id} onClick={onBookmarkACategorie}>
        {isfavorite ? 'Supprimer des favoris' : 'Ajouter aux favoris'}
      </Link>
    </Card.Content>
  </Card>
);

// == Export
export default Categorie;
