import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <div className="App-outside">
          <Navbar />
          <Searchbar />
        </div>
      </div>
    )
  }
}