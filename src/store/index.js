/* eslint-disable no-debugger */
/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";

const initialState = { emoji: [], finalSelection: "hbkhb" };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newEmoji = [...state.emoji];
    switch (action.type) {
      case "SELECT_EMOJI":
        newEmoji.push(action.emojiIndex);
        return { ...state, emoji: newEmoji };
      case "REMOVE_EMOJI":
        newEmoji.splice(action.selectEmoji, 1);
        return { ...state, emoji: newEmoji };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
