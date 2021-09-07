// == Import npm
import React from 'react';
import {
  Card, Segment, Container, Loader, Icon, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Article from './Article';

// == Import CSS
import './styles.scss';

// == Component
const ArticlesMember = ({
  articles, setUserBookmarksArticles, isLoading, visible, scrollToTop,
}) => (
  <Container>
    <Segment vertical>
      <h1 className="title">
        #Accueil
      </h1>
    </Segment>

    <Segment vertical color="teal">
      <Segment vertical>
        <h3>Bonne lecture sur toutSur.app !</h3>
      </Segment>
      <Card.Group className="card-group">
        { articles
          ? isLoading ? <Loader active size="big" inline="centered" />
            : articles.map((article) => (
              <Article article={article} setUserBookmarksArticles={setUserBookmarksArticles} />
            )) : (
              <div className="flex">
                <h4 className="h4center">Vous n'avez pas encore enregistré de catégories dans vos favoris.</h4>
                <div className="button-accueil">
                  <Link to="/categories"> 
                  <Button style={{backgroundColor: '#3282b841', color:'#2B2B2B'}} className="button-feed" circular size="medium" content="Personnaliser mon feed" icon="right arrow" labelPosition="right"/>
                  </Link>
                </div>
              </div>
          )}
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
export default ArticlesMember;
