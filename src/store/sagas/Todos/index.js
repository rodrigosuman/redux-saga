import { takeLatest, put, call } from "redux-saga/effects";

function apiGet(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + " do redux-saga");
    }, 1000);
  });
}

function* asyncAddTodo(action) {
  const response = yield call(apiGet, action.payload.text);

  yield put({ type: "ADD_TODO", payload: { text: response } });
}

export default function* rootTodos() {
  yield takeLatest("ASYNC_ADD_TODO", asyncAddTodo);
}
