import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from './../../hooks/useInputState';
import { DispatchContext } from "./../../contexts/todos.context";

// we're destructuring "addTodo" from the props
function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      {/* onSubmit will do the following: preventdefault, then call addTodo (and pass the current value to the form), then reset the input */}
      <form onSubmit={event => {
        event.preventDefault();
        dispatch({ type: "ADD", task: value });
        reset();
      }}>
        <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo" fullWidth />
      </form>
      
    </Paper>
  );
}

export default TodoForm;
