import { fork } from "redux-saga/effects";

import todos from "./Todos";

export default function* root() {
  yield fork(todos);
}
