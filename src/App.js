import React, { useReducer, useState } from "react";

const initialState = {
  toDos: []
};

const ADD = "add";
const DELETE = "delete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };
    case DELETE:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newItem });
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewItem(value);
  };

  return (
    <>
      <h1>Add To do</h1>
      <form onSubmit={onSubmit}>
        <input value={newItem} onChange={onChange} placeholder="Write to do" />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo, index) => (
          <li key={index}>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
