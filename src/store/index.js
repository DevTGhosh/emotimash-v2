/* eslint-disable no-debugger */
/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";

const initialState = { emoji: [] };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newEmoji = [...state.emoji];

    switch (action.type) {
      case "SELECT_EMOJI":
        // if 1st emoji isnt present replace null with selected value
        if (newEmoji[0] === null) {
          newEmoji.splice(0, 1, action.emojiIndex);
        } else {
          newEmoji.push(action.emojiIndex);
        }
        return { ...state, emoji: newEmoji };
      case "REMOVE_EMOJI":
        newEmoji.splice(action.selectEmoji, 1);
        return { ...state, emoji: newEmoji };
      case "REVERSE_EMOJI":
        newEmoji.push(null);
        newEmoji.reverse();

        return { ...state, emoji: newEmoji };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
