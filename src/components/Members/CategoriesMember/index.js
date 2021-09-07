// == Import npm
import React from 'react';
import {
  Card, Segment, Container, Grid,
} from 'semantic-ui-react';
import Categorie from './Categorie';

// == Import CSS
import './styles.scss';

// == Composant
const CategoriesMember = ({
  list, onCategorieSelected, onBookmarkACategorie, usedButton, userBookmarksCategoriesPage, cards, message, categorieSelected,
}) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Catégories
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Segment vertical>
        {message ? 'Catégorie ajoutée à vos favoris !' : 'Personnalisez votre feed d\'accueil avec vos catégories préférées ou prenez simplement le temps de parcourir une catégorie.'}

      </Segment>
      <Card.Group className="card-group">
        <Grid columns={5} doubling relaxed>
          {
        list.map((card) => (
          <Grid.Column>
            <Categorie
              key={card.id}
              categorie={card}
              onCategorieSelected={onCategorieSelected}
              onBookmarkACategorie={onBookmarkACategorie}
              userBookmarksCategoriesPage={userBookmarksCategoriesPage}
              cards={cards}
            />
          </Grid.Column>
        ))
          }
        </Grid>
      </Card.Group>
    </Segment>
  </Container>
);

// == Export
export default CategoriesMember;
