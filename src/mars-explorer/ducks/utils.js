import { combineReducers } from "redux";

export function createEntityReducer(entityName) {
  function ids(state = [], action) {
    if (action[entityName]) {
      return Array.from(new Set(state.concat(Object.keys(action[entityName]))));
    }
    return state;
  }

  function byId(state = {}, action) {
    if (action[entityName]) {
      return {
        ...state,
        ...action[entityName]
      };
    }

    return state;
  }

  function fetching(state = false, action) {
    switch (action.type) {
      case `${entityName}/fetch/start`:
        return true;
      case `${entityName}/fetch/success`:
      case `${entityName}/fetch/error`:
        return false;
      default:
        return state;
    }
  }

  return combineReducers({
    ids,
    byId,
    fetching
  });
}
