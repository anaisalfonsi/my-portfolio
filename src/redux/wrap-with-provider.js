import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

export default ({ element }) => {
  return <Provider store={configureStore}>{element}</Provider>;
};
