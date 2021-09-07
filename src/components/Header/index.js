// == Import npm
import React from 'react';

import {
  Menu, Header, Container,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant

const MenuComponent = ({
  userLog, logOutUser, onClickBookMarkPage, setUserSignUp, setUserLog, userSignUp,
}) => {
  const removeErrorClick = () => {
    if (userSignUp.error) {
      setUserSignUp({
        ...userSignUp,
        password: '',
        confirmPassword: '',
        error: false,
      });
    }
    if (userSignUp.databaseError) {
      setUserSignUp({
        ...userSignUp,
        password: '',
        confirmPassword: '',
        databaseError: false,
      });
    }
    if (userLog.error) {
      setUserLog({
        ...userLog,
        password: '',
        confirmPassword: '',
        error: false,
      });
    }
    if (userLog.databaseError) {
      setUserLog({
        ...userLog,
        password: '',
        confirmPassword: '',
        databaseError: false,
      });
    }
  };

  return (
    <Container className="container">
      <Menu secondary className="header-menu">
        <NavLink
          to="/"
          className="menu-title"
        >
          <Header as="h2">toutSur.app</Header>
        </NavLink>

        { userLog.logged ? (
          <Menu.Menu position="right">
            <NavLink
              className="menu-link"
              to="/"
              exact
              activeClassName="menu-link--active"
            >
              <Menu.Item
                className="menu-button"
                position="right"
                name="Accueil"
                href="/"
              >Accueil
              </Menu.Item>
            </NavLink>
            <NavLink
              className="menu-link"
              to="/categories"
              exact
              activeClassName="menu-link--active"
            >
              <Menu.Item
                className="menu-button"
                position="right"
                name="categories"
                href="/categories"
              >Catégories
              </Menu.Item>
            </NavLink>
            <NavLink
              className="menu-link"
              to="/favoris"
              exact
              activeClassName="menu-link--active"
              onClick={onClickBookMarkPage}
            >
              <Menu.Item
                className="menu-button"
                position="right"
                name="favoris"
                href="/favoris"
              >Mes favoris
              </Menu.Item>
            </NavLink>
            <NavLink
              className="menu-link"
              to="/blog"
              exact
              activeClassName="menu-link--active"
            >
              <Menu.Item
                className="menu-button"
                position="right"
                name="blog"
                href="/blog"
                color="blue"
              >Créer un article
              </Menu.Item>
            </NavLink>
            <NavLink
              className="menu-link"
              to="/"
              onClick={logOutUser}
            >
              <Menu.Item
                className="menu-button"
                position="right"
                name="disconnect"
                href="/"
                color="blue"
              >Déconnexion
              </Menu.Item>
            </NavLink>
          </Menu.Menu>
        )
          : (
            <Menu.Menu position="right">
              <NavLink
                className="menu-link"
                to="/"
                exact
                activeClassName="menu-link--active"
                onClick={removeErrorClick}
              >
                <Menu.Item
                  className="menu-button"
                  position="right"
                  name="Accueil"
                  href="/"
                >Accueil
                </Menu.Item>
              </NavLink>
              <NavLink
                className="menu-link"
                to="/connection"
                exact
                activeClassName="menu-link--active"
                onClick={removeErrorClick}
              >

                <Menu.Item
                  className="menu-button"
                  position="right"
                  name="Connection"
                  href="/connection"
                >Connexion
                </Menu.Item>
              </NavLink>
              <NavLink
                className="menu-link"
                to="/inscription"
                exact
                activeClassName="menu-link--active"
                onClick={removeErrorClick}
              >
                <Menu.Item
                  className="menu-button"
                  position="right"
                  name="Inscription"
                  href="/inscription"
                  color="blue"
                >Inscription
                </Menu.Item>
              </NavLink>
            </Menu.Menu>
          )}
      </Menu>
    </Container>
  );
};

// == Export
export default MenuComponent;
