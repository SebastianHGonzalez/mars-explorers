import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import RoverProfilePage from "mars-explorer/pages/rover-profile";
import RoversPage from "mars-explorer/pages/rovers";
import AboutPage from "mars-explorer/pages/about";
import FeedPage from "mars-explorer/pages/feed";
import NotFound from "mars-explorer/pages/not-found";

const MarsExplorerRoutes = () => (
  <Router>
    <Switch>
      <Route path="/rovers/:id" component={RoverProfilePage} />
      <Route path="/rovers" component={RoversPage} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/" component={FeedPage} />
      <Route
        path="/"
        render={() => <NotFound redirectTo="/" afterSeconds={5} />}
      />
    </Switch>
  </Router>
);

export default MarsExplorerRoutes;
