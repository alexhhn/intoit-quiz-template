import { createAction, handleActions, combineActions } from "redux-actions";
import Api from "../../services/Api";

const initialState = {
  data: null
};

/*
 * createActions
 */

export const fetchSubjects = createAction("FETCH_SUBJECTS", async () => {
  let res = Api.fetchSubjects();
  return res;
});

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
      return { state };
  }
};

export default handleActions(
  {
    [fetchSubjects](state, action) {
      console.log(action);
      return {
        ...state
      };
    }
  },
  initialState
);
