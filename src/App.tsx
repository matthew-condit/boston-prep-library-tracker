import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import { Router, Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import { Routes, NavHeader } from './components/routes/routeComponents';

import Landing from './components/landing/landing';
import Register from './components/register/registerComponent';
import UsersList from './components/userList/userList';
import BooksList from './components/booksList/booksList';
import Login from './components/login/login';
import AddBook from './components/addBook/addBook';

const App = ({ store }) => {

  const routesProps = {
    Landing,
    Login,
    Register,
    UsersList,
      BooksList,
      AddBook
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
