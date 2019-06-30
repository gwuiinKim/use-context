import React, { useReducer, useState } from "react";
import uuid from "uuid/v4";

const initialState = {
  toDos: []
};

const ADD = "add";
const DELETE = "delete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DELETE:
      return { toDos: state.toDos.filter(toDo => toDo.id !== action.payload) };
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
        {state.toDos.map(toDo => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button
              onClick={() =>
                dispatch({
                  type: DELETE,
                  payload: toDo.id
                })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
