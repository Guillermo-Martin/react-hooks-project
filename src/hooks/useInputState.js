import { useState } from 'react';

export default initialVal => {
  // reserve the state
  const [value, setValue] = useState(initialVal);

  // function for handling the input change
  const handleChange = event => {
    setValue(event.target.value);
  }

  // function for reseting the input change
  const reset = () => {
    setValue("");
  }

  // return and array (or object) with the piece of state and the functions you made 
  return [value, handleChange, reset];
}
