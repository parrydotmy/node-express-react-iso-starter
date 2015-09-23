import React from 'react'
import {Route} from 'react-router'
import App from './app'
import Intro from './intro'
import Placeholder from './placeholder'

export default (
  <Route handler={App}>
    <Route name="intro" path="intro" handler={Intro} />
    <Route name="placeholder" path="placeholder" handler={Placeholder} />
  </Route>
)
