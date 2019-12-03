import React, { Component } from 'react';
import './App.scss';
import ItemsList from './components/ItemsList';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="header">
          <h1>To-Do List</h1>
          <Form />
        </div>
        <ItemsList />
        </div>

    );
  }
}

export default App;
