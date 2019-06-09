import React from "react";
import { Provider } from "react-redux";

import createStore from "mars-explorer/createStore";
import MarsExplorerRoutes from "mars-explorer/routes";

const MarsExplorer = () => (
  <Provider store={createStore()}>
    <MarsExplorerRoutes />
  </Provider>
);

export default MarsExplorer;
