import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ToDoList from './pages/ToDoList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Login } />
        <Route exact path='/tasks' component={ ToDoList } />
      </Switch>
    );
  }
}

export default App;
