import React from 'react';
import {Link} from 'react-router';

export default class Intro extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="intro">Introduction</Link></li>
        <li><Link to="placeholder">Placeholder</Link></li>
      </ul>
    )
  }
}
