const INITIAL_STATE = {
  todos: [
    {
      text: "Estudar redux-saga"
    }
  ]
};

export function addTodo(text) {
  return {
    type: "ASYNC_ADD_TODO",
    payload: { text }
  };
}

/**
 * Reducer
 */
export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
}
