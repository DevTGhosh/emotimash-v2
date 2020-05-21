/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";

const initialState = [{ emoji: [] }, { finalSelection: "hbkhb" }];
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState = state;
    switch (action.type) {
      case "SELECT_EMOJI":
        newState[0].emoji.push(action.emojiIndex);
        return newState;
      case "REMOVE_EMOJI":
        newState[0].emoji.splice(action.selectEmoji, 1);
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
