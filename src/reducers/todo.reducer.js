import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  // we'll return a new version of the state
  switch(action.type) {
    case "ADD":
      // take everything in the existing state (the todos), put it in an array, then add in a new todo
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return state.map(todo => 
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      );
    case "EDIT":
      return state.map(todo => 
        todo.id === action.id ? {...todo, task: action.newTask} : todo
      );
    default:
      return state;
  }
};

export default reducer;



// the actions we'll pass in will look something like:
// {type: "ADD", task: "Walk the dog"}
// {type: "REMOVE", id: 123123} <-- we'll pass in the id of the todo we want to remove
// {type: "TOGGLE", id: 123213}
// {type: "EDIT", id: 12312312, newTask: "Walk cat"}
