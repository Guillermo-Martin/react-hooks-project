import React from "react";
import TodoList from "./../TodoList";
import TodoForm from "./../TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { TodosProvider } from "./../../contexts/todos.context";


function TodoApp() {
  // sync todos to local storage
  // useEffect(() => {
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);  // <-- it's best practice to add the second argument to specify when useEffect should run

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
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
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