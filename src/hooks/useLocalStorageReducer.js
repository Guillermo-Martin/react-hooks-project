import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
  // the function being passed in (the 3rd argument) will be used to establish the initial state
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    }
    catch(err) {
      val = defaultVal;
    }
    // val will either be "defaultVal" or it will be the value that was already in localStorage
    return val;
  });

  // when "state" changes we want to sync with localStorage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  // return state and dispatch
  return [state, dispatch];
}

export { useLocalStorageReducer };
