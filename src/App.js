import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/ducks/todos";

function App({ state, addTodo, ...props }) {
  const { todos } = state;

  return (
    <div>
      <h1>Hello, world!</h1>
      <div>
        <ul>
          {todos.map((todo, key) => (
            <li key={key}>{todo.text}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => addTodo("teste")}>Add todo</button>
    </div>
  );
}

const mapStateToProps = state => ({
  state: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
