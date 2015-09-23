import React from 'react';
import {RouteHandler} from 'react-router';
import Nav from './nav';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <br/>
        <h1>Starter kit</h1>
        <Nav/>
        <RouteHandler/>
      </div>
    )
  }
}
