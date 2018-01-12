import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import { Router, Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import { Routes, NavHeader } from './components/routes/routeComponents';

import Landing from './components/landing/landing';
import Register from './components/register/registerComponent';
import UsersList from './components/userList/userList';
import BrowseBooks from './components/browseBooks/browseBooks';
import Login from './components/login/login';
import BookOverview from './components/bookOverview/bookOverview';
import BookHistory from './components/bookHistory/bookHistory';
import AddBook from './components/addBook/addBook';
import SearchBook from './components/searchBook/searchBook';
import Profile from './components/profile/profile';
const App = ({ store }) => {

  const routesProps = {
    Landing,
    Login,
    Register,
    UsersList,
      BrowseBooks,
      BookOverview,
      BookHistory,
      SearchBook,
      AddBook,
      Profile
  };

  console.warn(store.getState());
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavHeader />
            <Routes {...routesProps} />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
