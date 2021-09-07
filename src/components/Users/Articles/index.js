// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Segment, Container, Loader, Icon
} from 'semantic-ui-react';
import Article from './Article';

// == Import CSS
import './styles.scss';

// == Composant
const Articles = ({
  categorieSelected, isLoading, visible, scrollToTop,
}) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Articles
      </h1>
    </Segment>
    <Segment vertical color="teal">
      <Segment vertical>
        <h3>Bienvenue sur toutSur.app !</h3><Link to="/inscription"> Pensez à vous inscrire !</Link>
      </Segment>
      <Card.Group className="card-group">
          { isLoading ? <Loader active size="big" inline="centered" />
            : categorieSelected.map((card) => (
                <Article key={card.id} article={card} className="article" />
            ))}
      </Card.Group>
      <Icon
        className="scroll-up-button"
        name="arrow circle up"
        size="huge"
        style={{ display: visible ? 'inline' : 'none' }}
        onClick={scrollToTop}
        color="teal"
      />
    </Segment>
  </Container>
);

// == Export
export default Articles;
