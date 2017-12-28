import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import { Router, Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import { Routes, NavHeader } from './components/routes/routeComponents';

import Landing from './components/landing/landing';
import Register from './components/register/registerComponent';
import UsersList from './components/userList/userList';
import Login from './components/login/login';

const App = ({ store }) => {

  const routesProps = {
    Landing,
    Login,
    Register,
    UsersList
  }
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
