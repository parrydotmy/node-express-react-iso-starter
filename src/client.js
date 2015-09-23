import React from "react"
import Router from "react-router"
import routes from './components/routes'

Router.run(routes, Router.HistoryLocation, Handler => {
  React.render(<Handler/>, document.getElementById('react-main-mount'))
})
