// == Import npm
import React from 'react';
import { Container, Segment, Form, Divider, Message } from 'semantic-ui-react';


// == Import
import './styles.scss';

// == Composant
const SignUpForm = ({userSignUp, handleInputSubmit, handleInputChange}) => {
  // == Fonctions

  return(
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
          //J'empeche le rechargement au submit
          e.preventDefault();
          handleInputSubmit(e);
        }}
        error={userSignUp.error}
        >
          <h2>
            Veuillez vous inscrire pour poursuivre:
          </h2>
          { userSignUp.error
          ? 
            <Message
            error
            header='Erreur dans vos données :'
            content='Veuillez vérifier vos informations...'
            />
          :
          null
          }
          { userSignUp.subscribed
          ? 
            <Message
            color='olive'
            header='Bienvenue sur toutSur.app !'
            content='Vous pouvez maintenant vous connecter.'
            />
          :
          null
          }
          
          <Form.Field>
            <p>Nom:</p>
            <input
            type='text' 
            placeholder='Nom'
            required
            name='name'
            value={userSignUp.name}
            onChange= {handleInputChange}
            maxLength={32}
            />
          </Form.Field>
          <Divider />

          <Form.Field>
            <p>Email:</p>
            <input 
            type='email' 
            placeholder='Email'
            required
            name='email'
            value={userSignUp.email}
            onChange= {handleInputChange}
            maxLength={128}
            />
          </Form.Field>
          <Divider />

          <Form.Field>
          <p>Mot de passe:</p>
          <Form.Input
            fluid
            type='password'
            name='password'
            placeholder='Mot de passe'
            value={userSignUp.password}
            onChange= {handleInputChange}
            maxLength={128}
            required
          />
          </Form.Field>
          <Divider />

          <Form.Field>
          <p>Confirmer votre mot de passe:</p>
            <Form.Input
            type='password'
            placeholder='Confirmez votre mot de passe'
            required
            name='confirmPassword'
            value={userSignUp.confirmPassword}
            onChange= {handleInputChange}
            maxLength={128}
            />
          </Form.Field>
          <Form.Button 
          primary
          //j'empeche la possibilité de clicker sur le bouton tant que tous les champs ne sont pas completé
          disabled={!userSignUp.name
          || !userSignUp.email
          || !userSignUp.password
          || !userSignUp.confirmPassword
          }
          onClick={handleInputSubmit}
          >
            S'inscrire
            </Form.Button>
        </Form>
      </div>
    </Segment>
  </Container>
  )
};


// == Export
export default SignUpForm;
