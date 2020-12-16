import React, { Component } from 'react';

import Nav from './Nav';
import Start from './Start';
import NewProject from './NewProject';
import Company from './Company';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Start></Start>
        <NewProject></NewProject>
        <Company></Company>
      </div>
    );
  }
}
