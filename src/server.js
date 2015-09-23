import React from "react";
import Router from "react-router";
import express from 'express';
import compression from 'compression';

import routes from './components/routes';

export function run() {
    let server = express();
    server.set('view engine', 'ejs');
    server.set('views', __dirname + '/views');
    server.set('port', (process.env.PORT || 5000));
    server.use(express.static(__dirname + './../static')); // TODO: this isn't great
    server.use(compression())

    server.get('*', function (req, res) {
      Router.run(routes, req.url, Handler => {
        let content = React.renderToString(<Handler />);
        res.render('index', {content: content});
      });
    });

    server.listen(server.get('port'), function() {
      console.log("Node app is running at localhost:" + server.get('port'));
    });
}
