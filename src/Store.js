import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import subjectsReducer from "./ducks/subjects";
import promise from "redux-promise-middleware";

const configureReduxStore = history => {
  //? Some middleware to consider using: Redux-thunk, routerMiddleware
  const allMiddleware = [promiseMiddleware];
  // Add redux logger if not in production
  if (process.env.NODE_ENV !== `production`) {
    const createLogger = require(`redux-logger`).createLogger;
    const logger = createLogger({ collapsed: true });
    allMiddleware.push(logger);
  }

  const rootReducer = history =>
    combineReducers({
      subjectsReducer
    });

  console.log("allMiddleware", allMiddleware);

  return createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(...allMiddleware))
  );
};

export default configureReduxStore(history);
