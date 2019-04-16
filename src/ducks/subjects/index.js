/*
 * action types
 */

const ADD_TODO = "ADD_TODO";

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

const todoReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        ...state,
        [action.text]: true
      });
    default:
      return state;
  }
};

export default todoReducers;
