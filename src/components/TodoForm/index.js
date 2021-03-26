import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from './../../hooks/useInputState';

// we're destructuring "addTodo" from the props
function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper>
      {/* onSubmit will do the following: preventdefault, then call addTodo (and pass the current value to the form), then reset the input */}
      <form onSubmit={event => {
        event.preventDefault();
        addTodo(value);
        reset();
      }}>
        <TextField value={value} onChange={handleChange} />
      </form>
      
    </Paper>
  );
}

export default TodoForm;
