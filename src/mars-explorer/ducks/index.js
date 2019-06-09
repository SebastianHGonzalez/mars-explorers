import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { createSelector } from "reselect";

import {
  actions as roverActions,
  saga as roverSaga
} from "mars-explorer/ducks/rovers";
import { createEntityReducer } from "mars-explorer/ducks/utils";

export const actions = {
  rovers: roverActions
  // TODO: add actions
};

export const selectors = {};
selectors.rovers = {};
selectors.rovers.state = state => state.rovers;
selectors.rovers.ids = createSelector(
  selectors.rovers.state,
  ({ ids }) => ids
);
selectors.rovers.byId = createSelector(
  selectors.rovers.state,
  ({ byId }) => byId
);
selectors.rovers.fetching = createSelector(
  selectors.rovers.state,
  ({ fetching }) => fetching
);
selectors.rovers.all = createSelector(
  selectors.rovers.ids,
  selectors.rovers.byId,
  (ids, byId) => ids.map(id => byId[id])
);

export const saga = function* rootSaga() {
  yield all([
    roverSaga()
    // TODO: Add sagas
  ]);
};

export const reducer = combineReducers({
  photos: createEntityReducer("photos"),
  rovers: createEntityReducer("rovers"),
  cameras: createEntityReducer("cameras")
  // TODO: Add reducers
});
