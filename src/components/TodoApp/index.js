import React, { useState } from "react";
import TodoList from "./../TodoList";
import TodoForm from "./../TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    // call setTodos; spread out all the current todos, then add a todo to the end
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
  }

  const removeTodo = todoId => {
    // filter out removed todo
    // if todo.id doesn't equal the passed in todoId, then it'll go into updatedTodos 
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
  
    // call setTodos with new todos array
    setTodos(updatedTodos);
  }

  const toggleTodo = todoId => {
    // for each todo, check to see if todo.id equals the passed in todoId; if it does, change "completed" by 
    // spreading out the one todo and only changing "completed"; otherwise, just return the todo
    const updatedTodos = todos.map(todo => 
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    );

    // call setTodos with the new todos array
    setTodos(updatedTodos);
  }

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo => 
      todo.id === todoId ? {...todo, task: newTask} : todo
    );

    // call setTodos with the new todos array
    setTodos(updatedTodos);
  }

  return (
    <Paper 
      style={{
        padding: "0",
        margin: "0",
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo} 
          />
        </Grid>
      </Grid>

      
    </Paper>

  );
}

export default TodoApp;

// TodoApp will manage the state for all of our todos
// our TodoApp will have:
  // TodoForm
  // TodoList
    // each item in the list will be a TodoItem

// each Todo will have: 
  // id, task, completed