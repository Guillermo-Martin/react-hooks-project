import React, { createContext, useReducer } from "react";
import todoReducer from "./../reducers/todo.reducer";

// default todos for context
const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];

// create the context itself
export const TodosContext = createContext();
export const DispatchContext = createContext();

// create the provider component
export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
