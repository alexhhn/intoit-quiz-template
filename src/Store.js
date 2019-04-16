import { createStore, combineReducers, applyMiddleware } from "redux";
/*
 * action types
 */

const ADD_TODO = "ADD_TODO";

/*
 * action creators
 */

function addTodo(text) {
  return { type: ADD_TODO, text };
}

const todoReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text
          }
        ]
      });
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todoReducers
});

const store = createStore(todoApp);

export default store;
