import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      // call setTodos; spread out all the current todos, then add a todo to the end
      setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    },
    removeTodo: todoId => {
      // filter out removed todo
      // if todo.id doesn't equal the passed in todoId, then it'll go into updatedTodos 
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
    
      // call setTodos with new todos array
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      // for each todo, check to see if todo.id equals the passed in todoId; if it does, change "completed" by 
      // spreading out the one todo and only changing "completed"; otherwise, just return the todo
      const updatedTodos = todos.map(todo => 
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      );
    
      // call setTodos with the new todos array
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo => 
        todo.id === todoId ? {...todo, task: newTask} : todo
      );
    
      // call setTodos with the new todos array
      setTodos(updatedTodos);
    }
  }
}
