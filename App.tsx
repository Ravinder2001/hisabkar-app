import React, { createContext, useReducer } from "react";

import { Provider } from "react-redux";
import store from "./src/store/store";
import AuthStack from "./AuthStack";

const App = () => {
  return (
    <Provider store={store}>
      <AuthStack />
    </Provider>
  );
};
export default App;
