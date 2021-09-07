// == Import npm
import React from 'react';
import {
  Card, Segment, Container, Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Categorie from './Categorie';

// == Import CSS
import './styles.scss';

// == Composant
const Categories = ({ list, onCategorieSelected }) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Segment vertical>
        <h3>Bienvenue sur toutSur.app !</h3><Link to="/inscription"> Pensez à vous inscrire !</Link>
      </Segment>
      <Card.Group className="card-group">
        <Grid columns={5} doubling relaxed>
          {
        list.map((card) => (
          <Grid.Column>
            <Categorie key={card.id} categorie={card} onCategorieSelected={onCategorieSelected} />
          </Grid.Column>
        ))
          }
        </Grid>
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default Categories;
