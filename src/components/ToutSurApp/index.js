// === IMPORTANT === // 
// === Structure and of the App === //
// === Components name & folders : === //
// - ToutSurApp (Parent folder & component of the application)
// - Header (Folder & Component of the Header of the application)

// - Members (Members folder with all components for a user connected)
// --> Articles (Component of all of the favorite articles of the member)
// --> ArticlesByCategories (Component of all of the article FOR a selected categorie)
// --> Blog (Component page of blogging creation for the member)
// --> CategoriesMember (Component of all of the categories of the application for a member)

// - Users (Users folder with all components for a non connected user)
// --> Articles (Component of all of the articles for a selected categorie)
// --> Categories (Component of all of the categories of the application for a non connected)
// --> Connection (Component of the connection page)
// --> SignUpForm (Component of the sign up form page)



// ==== IMPORT SECTION ====
// == Import NPM frameworks & librairies
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import {
  Route, Switch, Link, withRouter, Redirect,
} from 'react-router-dom';
import axios from 'axios';

// == Import CSS styles
import './styles.scss';

// == Import users components
import Header from 'src/components/Header';
import Connection from 'src/components/Users/Connection';
import Categories from 'src/components/Users/Categories';
import Articles from 'src/components/Users/Articles';

// == Import members components
import CategoriesMember from 'src/components/Members/CategoriesMember';
import ArticlesMember from 'src/components/Members/Articles';
import ArticlesByCategories from 'src/components/Members/ArticlesByCategories';
import Favoris from 'src/components/Members/Favoris';
import Blog from '../Members/Blog';
import SignUpForm from '../Users/SignUpForm';

// ==== INITIAL DATA SECTION ====
// == Initial Login Form Data
const initialFormLoginData = ({
  email: '',
  password: '',
  error: false,
  databaseError: false,
  logged: false,
});

// == Initial Sign up Form Data
const initialFormSignUpData = ({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: false,
  subscribed: false,
  databaseError: false,
});

// ==== COMPONENTS toutSurAPP SECTION ====
const ToutSurApp = () => {
// == State of the application
  const [cards, setCards] = useState([]);
  const [userLog, setUserLog] = useState(initialFormLoginData);
  const [userSignUp, setUserSignUp] = useState(initialFormSignUpData);
  const [categorieSelected, setCategorieSelected] = useState([]);
  const [userBookmarksCategories, setUserBookmarksCategories] = useState([]);
  const [userBookmarksCategoriesPage, setUserBookmarksCategoriesPage] = useState([]);
  const [userBookmarksArticles, setUserBookmarksArticles] = useState([]);
  const [favoritesRSSFeed, setFavoritesRSSFeed] = useState([]);
  const [categorieClicked, setCategorieClicked] = useState('');
  const [filteredFavorites, setFilteredFavorites] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(false);

  // == Functions of the application:

  // == FLUX RSS FUNCTIONS == //
  // == Render a list of articles by categorie :
  const onClickCategoriePage = async (categorie) => {
    setIsLoading(true);
    try {
      if (categorie === 'Musique') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/music',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Jeux vidéos') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/gaming',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Sport') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/sports',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Science') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/sciences',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Art') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/art',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Voyage') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/travel',
        });
        console.log(dataFetched.data);
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Technologie') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/technology',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Mode') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/fashion',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Actualités') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/news',
        });
        setCategorieSelected(dataFetched.data);
      }
      else if (categorie === 'Cinema') {
        setCategorieSelected([]);
        const dataFetched = await axios({
          method: 'get',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/cinema',
        });
        setCategorieSelected(dataFetched.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  // == LOG IN AND REGISTER FUNCTIONS == //
  // == Function who modify the input form and register what the user is typing in the login form
  const onInputLogUserChange = (name, value) => {
    setUserLog({
      ...userLog,
      [name]: value,
    });
  };

  // == Same Function but for the sign up form
  const onFormSignUp = (name, value) => {
    setUserSignUp({
      ...userSignUp,
      [name]: value,
    });
  };

  // == Function for send a request to the database for register an user account
  const postSubscribeUser = async () => {
    try {
      const userSubscribed = await axios({
        method: 'post',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/signup',
        data: {
          name: userSignUp.name,
          email: userSignUp.email,
          password: userSignUp.password,
          passwordConfirm: userSignUp.confirmPassword,
        },
      });
      setUserSignUp({
        ...userSignUp,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: false,
        subscribed: true,
      });
    }
    catch (error) {
      setUserSignUp({
        ...userSignUp,
        databaseError: true,
      });
    }
  };

  // == Function for the authentification of the user
  const postLoginUser = async () => {
    try {
      const userLogged = await axios({
        method: 'post',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/login',
        data: {
          email: userLog.email,
          password: userLog.password,
        },
      });
      // == If everything is ok :
      // == We take the  JWT token responded by the API and we stock it in the header of axios
      // == And we stock it on the localStorage if the user reload the page.
      axios.defaults.baseURL = 'https://toutsur-app-gachimaster.herokuapp.com';
      axios.defaults.headers.common.Authorization = ` bearer ${userLogged.data.token} `;
      localStorage.setItem('token', userLogged.data.token);
      setUserLog({
        ...userLog,
        id: userLogged.data.id,
        email: '',
        password: '',
        error: false,
        logged: true,
        databaseError: false,
      });
    }
    // == If there is an error we set a error message with a state :
    catch (error) {
      setUserLog({
        ...userLog,
        databaseError: true,
        error: false,
      });
    }
  };

  // == Function to verify the login form sended (must include @ and 8 caracters minimum)
  const validateLoginForm = () => {
    if (!userLog.email.includes('@')) {
      setUserLog({
        ...userLog,
        password: '',
        error: true,
      });
    }
    else if ((userLog.password.length < 8)) {
      setUserLog({
        ...userLog,
        password: '',
        error: true,
      });
    }
    else {
      postLoginUser();
    }
  };

  // == Sign out function who reinitialise the local storage and the user datas.
  const logOutUser = () => {
    localStorage.clear();
    setUserLog({
      ...userLog,
      email: '',
      password: '',
      error: false,
      logged: false,
      databaseError: false,
    });
    setFavoritesRSSFeed([]);
  };

  // == Function who recognize the name of the category clicked and run the fetch article function
  const onCategorieSelected = (event) => {
    const clicked = event.target.closest('a');
    onClickCategoriePage(clicked.name);
    setCategorieClicked(clicked.name);
  };

  // == Function who run the SignUp data form register function and clean the error if there is.
  const handleInputSignupFormChange = (evt) => {
    const { name, value } = evt.target;
    setUserSignUp(name, value);
    onFormSignUp(name, value);
    if (userSignUp.error) {
      setUserSignUp({
        ...userSignUp,
        error: false,
      });
    }
    if (userSignUp.databaseError) {
      setUserSignUp({
        ...userSignUp,
        databaseError: false,
      });
    }
  };

  // Function for check the register data form (include @ and more than 8 caracters)
  const validateSignUpForm = () => {
    // If signUpPassword is === to the confirmPassword
    if (userSignUp.password !== userSignUp.confirmPassword) {
      setUserSignUp({
        ...userSignUp,
        password: '',
        confirmPassword: '',
        error: true,
      });
    }
    // If the SignUp Email include an @
    else if (!userSignUp.email.includes('@')) {
      setUserSignUp({
        ...userSignUp,
        password: '',
        confirmPassword: '',
        error: true,
      });
    }
    // Eight caracters minimum for the password
    else if (((userSignUp.password.length < 8) || (userSignUp.confirmPassword.length < 8))
    && (userSignUp.password !== userSignUp.confirmPassword)) {
      setUserSignUp({
        ...userSignUp,
        password: '',
        confirmPassword: '',
        error: true,
      });
    }
    else {
      postSubscribeUser();
    }
  };

  // == When the Submit SignUp Input is clicked we verify the informations
  const handleSignUpSubmit = (evt) => {
    evt.preventDefault();
    validateSignUpForm();
  };

  // == When the Login form is submitted, we check the informations
  // == with the valideLoginForm function.
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    validateLoginForm();
  };

  // == FETCH & REQUEST API FUNCTIONS == //

  // == Function for add a favorite categorie in the user bookmark.
  const bookmarkACategorie = async (categorie) => {
    try {
      const dataFetched = await axios({
        method: 'put',
        url: `https://toutsur-app-gachimaster.herokuapp.com/categories/${categorie}`,
      });
      if (dataFetched.data.length === 0) {
        setUserBookmarksCategories(null);
      }
      setUserBookmarksCategories(dataFetched.data);
    }
    catch (error) {
      console.log(error.message);
    }
  };

  // == Function who send a confirmation message and run the bookmark function
  // == when the user click to bookmark a favorite
  const onBookmarkACategorie = (event) => {
    setMessage(true);
    setTimeout(() => setMessage(false), 1000);
    const clicked = event.target;
    bookmarkACategorie(clicked.name);
  };

  // == Function for fetch all of the favorites categories of the user
  // == when he come on the favorite page.
  // == Function for bookmark a categorie
  const onClickBookMarkPage = async () => {
    try {
      const dataCategoriesFetched = await axios({
        method: 'post',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/categories',
      });
      if (dataCategoriesFetched.data.length === 0) {
        setUserBookmarksCategoriesPage(null);
      }
      else {
        setUserBookmarksCategoriesPage(dataCategoriesFetched.data);
      }
      const dataArticlesFetched = await axios({
        method: 'post',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/articles',
      });
      if (dataArticlesFetched.data.length === 0) {
        setUserBookmarksArticles(null);
      }
      else {
        setUserBookmarksArticles(dataArticlesFetched.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  // == Fetch fonction for all of the articles of the favorites categories of the user
  const onClickHomeMemberPage = async () => {
    let favoritesArticles = [];
    setFavoritesRSSFeed([]);
    setIsLoading(true);
    try {
      if (userLog.logged) {
        const dataFavoriteCategoriesFetched = await axios({
          method: 'post',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/categories',
        });
        dataFavoriteCategoriesFetched.data.forEach(async (data) => {
          if (data.name === 'Sport') {
            const dataFetchedSport = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/sports',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedSport.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Jeux vidéos') {
            const dataFetchedGaming = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/gaming',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedGaming.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Musique') {
            const dataFetchedMusic = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/music',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedMusic.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }

          if (data.name === 'Art') {
            const dataFetchedArt = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/art',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedArt.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }

          if (data.name === 'Science') {
            const dataFetchedSciences = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/sciences',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedSciences.data];
            setFavoritesRSSFeed([...favoritesArticles]);
            console.log(dataFetchedSciences);
          }
          if (data.name === 'Voyage') {
            const dataFetchedTravel = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/travel',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedTravel.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Technologie') {
            const dataFetchedTechno = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/technology',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedTechno.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
          if (data.name === 'Mode') {
            const dataFetchedMode = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/fashion',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedMode.data];
            setFavoritesRSSFeed([...favoritesArticles]);
            console.log(dataFetchedMode.data);
          }
          if (data.name === 'Actualités') {
            const dataFetchedActu = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/news',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedActu.data];
            setFavoritesRSSFeed([...favoritesArticles]);
            console.log(dataFetchedActu.data);
          }
          if (data.name === 'Cinema') {
            const dataFetchedCinema = await axios({
              method: 'get',
              url: 'https://toutsur-app-gachimaster.herokuapp.com/API/articles/cinema',
            });
            favoritesArticles = [...favoritesArticles, ...dataFetchedCinema.data];
            setFavoritesRSSFeed([...favoritesArticles]);
          }
        });
      }
    }
    catch (error) {
      console.log(error.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  // If the user want to delete the favorite categorie. We send a delete request to the API and
  // modify the page
  const onDeleteClick = async (evt) => {
    const categorieToDelete = evt.target.name;
    try {
      const dataAfterDelete = await axios({
        method: 'delete',
        url: `https://toutsur-app-gachimaster.herokuapp.com/categories/${categorieToDelete}`,
      });
      if (dataAfterDelete.data.length === 0) {
        setUserBookmarksCategoriesPage(null);
        setUserBookmarksCategories(null);
      }
      else {
        setUserBookmarksCategories(dataAfterDelete.data);
        setUserBookmarksCategoriesPage(dataAfterDelete.data);
      }
    }
    catch (error) {
      console.log(error.message);
    }
  };

  // == MODULES FUNCTIONS == //
  // Scroll up button display
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    }
    else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // When the scroll button is clicked, the window scroll to 0
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);

  // == USE EFFECT FONCTIONS == //
  // == When the page is loading, we check if there is a JWT Token of identification
  // ==  in the local storage of the user, and we fetch his favorites categories and articles
  // == to set in the state. Also, we fetch all of the categories of our database
  // == to put in the state appropried
  useEffect(async () => {
    const tokeninLocalStorage = localStorage.getItem('token');
    if (tokeninLocalStorage) {
      axios.defaults.baseURL = 'https://toutsur-app-gachimaster.herokuapp.com';
      axios.defaults.headers.common.Authorization = ` bearer ${tokeninLocalStorage} `;
      setUserLog({
        ...userLog,
        email: '',
        password: '',
        error: false,
        logged: true,
        databaseError: false,
      });
      try {
        const dataCategoriesFetched = await axios({
          method: 'post',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/categories',
        });
        if (dataCategoriesFetched.data.length === 0) {
          setUserBookmarksCategories(null);
        }
        else {
          setUserBookmarksCategories(dataCategoriesFetched.data);
          console.log(dataCategoriesFetched.data);
          setUserBookmarksCategoriesPage(dataCategoriesFetched.data);
        }
        const dataArticlesFetched = await axios({
          method: 'post',
          url: 'https://toutsur-app-gachimaster.herokuapp.com/favorites/articles',
        });
        if (dataArticlesFetched.data.length === 0) {
          setUserBookmarksArticles(null);
        }
        else {
          setUserBookmarksArticles(dataArticlesFetched.data);
        }
      }
      catch (error) {
        console.log(error.message);
      }
    }
    try {
      const dataFetched = await axios({
        method: 'get',
        url: 'https://toutsur-app-gachimaster.herokuapp.com/categories',
      });
      console.log('Catégories de notre site web:', dataFetched.data);
      setCards(dataFetched.data);
    }
    catch (error) {
      console.log(error.message);
    }
  }, []);

  // == This useEffect is running when the state of the favorite RSS feed of the users
  // == is fetched. It filter the articles by date of creation
  useEffect(() => {
    const filteredFavoritesArticles = favoritesRSSFeed.sort((a, b) => b.created - a.created);
    if (filteredFavoritesArticles.length === 0) {
      setFilteredFavorites(null);
    }
    else {
      setFilteredFavorites(filteredFavoritesArticles);
    }
  }, [favoritesRSSFeed]);

  useLayoutEffect(() => {
    onClickHomeMemberPage();
  }, [userLog.logged, userBookmarksCategories]);

  // == RENDER OF THE APPLICATION == //
  // We use Switch & Route for the routes of the App
  return (
    <div className="toutSurApp">
      {/* Header Component, for the menu and the website title */}
      <Header
        userLog={userLog}
        logOutUser={logOutUser}
        onClickBookMarkPage={onClickBookMarkPage}
        setUserLog={setUserLog}
        setUserSignUp={setUserSignUp}
        userSignUp={userSignUp}
      />

      {/* Starting routes */}
      <Switch>

        {/* Home Page */}
        <Route path="/" exact>
          { userLog.logged
            ? (
              /* If the user is connected */
              <ArticlesMember
                articles={filteredFavorites}
                setUserBookmarksArticles={setUserBookmarksArticles}
                isLoading={isLoading}
                visible={visible}
                scrollToTop={scrollToTop}
              />
            )
          /* If the user isn't connected */
            : (
              <Categories
                list={cards}
                onCategorieSelected={onCategorieSelected}
                visible={visible}
                scrollToTop={scrollToTop}
              />
            )}
        </Route>

        {/* Connection Page */}
        <Route path="/connection" exact>
          <Connection
            onInputLogUserChange={onInputLogUserChange}
            handleSubmitLogin={handleSubmitLogin}
            userLog={userLog}
            setUserLog={setUserLog}
          />
        </Route>

        {/* Articles Page */}
        <Route path="/articles" exact>
          { userLog.logged
            ? (
            /* If the user is connected */
              <ArticlesByCategories
                categorieSelected={categorieSelected}
                categorieClicked={categorieClicked}
                setUserBookmarksArticles={setUserBookmarksArticles}
                isLoading={isLoading}
                visible={visible}
                scrollToTop={scrollToTop}
              />
            )
            : (
            /* If the user isn't connected */
              <Articles
                categorieSelected={categorieSelected}
                isLoading={isLoading}
                visible={visible}
                scrollToTop={scrollToTop}
              />
            )}
        </Route>

        {/* Sign Up Page */}
        <Route path="/inscription" exact>
          <SignUpForm
            userSignUp={userSignUp}
            handleInputSignupFormChange={handleInputSignupFormChange}
            handleSignUpSubmit={handleSignUpSubmit}
          />
        </Route>

        {/* Favorite Page */}
        <Route path="/favoris" exact>
          <Favoris
            userBookmarksArticles={userBookmarksArticles}
            userBookmarksCategoriesPage={userBookmarksCategoriesPage}
            onDeleteClick={onDeleteClick}
            setUserBookmarksArticles={setUserBookmarksArticles}
            onCategorieSelected={onCategorieSelected}
          />
        </Route>

        {/* Blog Page if the user is connected */}
        { userLog.logged ? (
          <Route path="/blog" exact>
            <Blog />
          </Route>
        )
          : (
            <Route path="/blog" exact>
              <Redirect to="/" />
            </Route>
          )}

        {/* Categories Page */}
        <Route path="/categories" exact>
          { userLog.logged
            ? (
            /* If the user is connected */
              <CategoriesMember
                list={cards}
                onCategorieSelected={onCategorieSelected}
                onBookmarkACategorie={onBookmarkACategorie}
                isLoading={isLoading}
                userBookmarksCategoriesPage={userBookmarksCategoriesPage}
                cards={cards}
                message={message}
              />
            )
            /* If the user isn't connected */
            : <Categories list={cards} onCategorieSelected={onCategorieSelected} />}
        </Route>

        {/*  404 Page */}
        <Route>
          <Link
            to="/"
          >
            <Segment vertical>
              <h2>
                #Retour sur l'Accueil
              </h2>
            </Segment>
          </Link>
          <iframe src="https://giphy.com/embed/TLIj98vlSKpNXnkrBK" width="480" height="480" frameBorder="0" allowFullScreen />
        </Route>
        {/* End of the routes */}
      </Switch>
    </div>
  );
};

// == Export
export default withRouter(ToutSurApp);
