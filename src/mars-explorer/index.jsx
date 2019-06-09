import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";

import createStore from "mars-explorer/createStore";
import MarsExplorerRoutes from "mars-explorer/routes";

const RootStyles = styled.div`
  font-family: sans-serif;
`;

const MarsExplorer = () => (
  <RootStyles>
    <Provider store={createStore()}>
      <MarsExplorerRoutes />
    </Provider>
  </RootStyles>
);

export default MarsExplorer;
