// == Import : npm
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import 'src/styles/index.scss';

// == Import : local
// Composants
import ToutSurApp from 'src/components/ToutSurApp';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <Router><ToutSurApp /></Router>;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
