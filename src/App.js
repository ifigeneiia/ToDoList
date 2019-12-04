import React, { Component } from 'react';
import './App.scss';
import ItemsList from './components/ItemsList';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="container" >
        <div className="row" >
          <div className="col-12">
            <div className="App">
            <div className="header">
              <h1>To-Do List</h1>
              <Form />
            </div>
              <ItemsList />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
