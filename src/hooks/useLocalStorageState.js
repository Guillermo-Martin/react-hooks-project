import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  // make piece of state based off of value in local storage (or default)
  // we want to set the state to whatever's in local storage; we're going to pass useState a function to check localStorage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    }
    catch(err) {
      val = defaultVal;
    }
    return val;
  });

  // use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  // return state and setState
  return [state, setState];
}

export default useLocalStorageState;
