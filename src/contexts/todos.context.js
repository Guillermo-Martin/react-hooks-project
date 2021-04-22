// todos
// all methods to interact with todos
import React, { createContext } from "react";
import useTodoState from "./../hooks/useTodoState";

// default todos for context
const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];

// create the context itself
export const TodosContext = createContext();

// create the provider component
export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}
