import * as React from 'react';
import './App.css';

import {Router, Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import {Routes, NavHeader} from './components/routes/routeComponents';

import Landing from './components/landing/landing';

class App extends React.Component {
  render() {
    const routesProps = {
      Landing
    }
    return (
      <div className="App">
        <BrowserRouter>
                    <div>
                        <NavHeader/>
                        <Routes {...routesProps} />
                    </div>
                </BrowserRouter>
      </div>
    );
  }
}

export default App;
