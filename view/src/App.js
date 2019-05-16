import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <div className="App-outside">
          <Navbar />
          <SubNavbar />
        </div>
      </div>
    )
  }
}