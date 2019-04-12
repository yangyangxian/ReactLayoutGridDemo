import React, { Component } from 'react';
import './App.css';
import MyFirstGrid from './componet/MyFirstGrid';
import AddRemoveLayout from './componet/AddRemoveLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MyFirstGrid />         
          <AddRemoveLayout />    
      </div>      
    );
  }
}

export default App;
