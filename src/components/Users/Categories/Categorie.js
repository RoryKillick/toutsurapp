// == Import npm
import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import CSS
import './styles.scss';

// == Composant
const Categorie = ({ categorie, onCategorieSelected }) => (
  <Link
    to="/articles"
    onClick={onCategorieSelected}
    name={categorie.name}
  >
    <Card
      className="card-categorie"
      image={categorie.picture}
      header={`#${categorie.name}`}
      color={categorie.color}
      align="center"
      name={categorie.name}
    />
  </Link>
);

// == Export
export default Categorie;
