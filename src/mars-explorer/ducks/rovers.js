import { all, takeLatest, put, call } from "redux-saga/effects";

import { rovers } from "mars-explorer/api";

export const types = {
  fetch: {
    request: "rovers/fetch/request",
    start: "rovers/fetch/start",
    success: "rovers/fetch/success",
    error: "rovers/fetch/error"
  }
};

export const actions = {
  fetch: {
    request: () => ({ type: types.fetch.request }),
    start: () => ({ type: types.fetch.start }),
    success: ({ entities }) => ({
      type: types.fetch.success,
      ...entities
    }),
    error: () => ({ type: types.fetch.error })
  }
};

export function* saga() {
  yield all([takeLatest(types.fetch.request, fetch)]);
}

function* fetch() {
  yield put(actions.fetch.start());

  try {
    yield put(actions.fetch.success(yield call(rovers.fetch)));
  } catch (e) {
    yield put(actions.fetch.error(e));
  }
}
