import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import todoReducers from "./ducks/subjects";

const configureReduxStore = history => {
  const allMiddleware = [];
  // Add redux logger if not in production
  if (process.env.NODE_ENV !== `production`) {
    console.log("heis");
    const createLogger = require(`redux-logger`).createLogger;
    const logger = createLogger({ collapsed: true });
    allMiddleware.push(logger);
  }

  const rootReducer = history =>
    combineReducers({
      todoReducers
    });

  console.log("allMiddleware", allMiddleware);

  return createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(...allMiddleware))
  );
};

export default configureReduxStore(history);
