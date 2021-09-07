// == Import npm
import React from 'react';
import {
  Container, Segment, Form, Divider, Message,
} from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const SignUpForm = ({ userSignUp, handleSignUpSubmit, handleInputSignupFormChange }) =>
// == Fonctions

  (
    <Container>
      <Segment vertical>
        <h1 className="title">
          #Inscription
        </h1>
      </Segment>
      <Segment vertical color="teal">
        <div className="signup-container">
          <Form
            onSubmit={(e) => {
              // J'empeche le rechargement au submit
              e.preventDefault();
              handleSignUpSubmit(e);
            }}
            error={userSignUp.error}
          >
            <h2>
              Veuillez vous inscrire pour poursuivre:
            </h2>
            { userSignUp.error
              ? (
                <Message
                  color="red"
                  header="Il y a une erreur dans vos données :"
                  content="Votre nom, email et/ou mot de passe n'est pas valide. Veuillez vérifier vos informations..."
                />
              )
              : null}
            { userSignUp.subscribed
              ? (
                <Message
                  color="olive"
                  header="Bienvenue sur toutSur.app !"
                  content="Vous pouvez maintenant vous connecter."
                />
              )
              : null}
            { userSignUp.databaseError
              ? (
                <Message
                  color="red"
                  header="Il y a une erreur dans vos données :"
                  content="Votre nom, email et/ou mot de passe n'est pas valide. Veuillez vérifier vos informations..."
                />
              )
              : null}

            <Form.Field required>
              <label className="input-text">Nom</label>
              <input
                type="text"
                placeholder="Nom"
                required
                name="name"
                value={userSignUp.name}
                onChange={handleInputSignupFormChange}
                maxLength={32}
              />
            </Form.Field>
            <Divider />

            <Form.Field required>
              <label className="input-text">Email:</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={userSignUp.email}
                onChange={handleInputSignupFormChange}
                maxLength={128}
              />
            </Form.Field>
            <Divider />

            <Form.Field required>
              <label className="input-text">Mot de passe:</label>
              <Form.Input
                fluid
                type="password"
                name="password"
                placeholder="Mot de passe (8 caractères minimum)"
                value={userSignUp.password}
                onChange={handleInputSignupFormChange}
                maxLength={128}
                required
              />
            </Form.Field>
            <Divider />

            <Form.Field required>
              <label className="input-text">Confirmer votre mot de passe:</label>
              <Form.Input
                type="password"
                placeholder="Confirmez votre mot de passe (8 caractères minimum)"
                required
                name="confirmPassword"
                value={userSignUp.confirmPassword}
                onChange={handleInputSignupFormChange}
                maxLength={128}
              />
            </Form.Field>
            <Form.Button
              primary
              disabled={!userSignUp.name
          || !userSignUp.email
          || !userSignUp.password
          || !userSignUp.confirmPassword}
              onClick={handleSignUpSubmit}
            >
              S'inscrire
            </Form.Button>
          </Form>
        </div>
      </Segment>
    </Container>

  )
;

// == Export
export default SignUpForm;
