import React, { useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Todo = ({ todo, onUpdateTodo, todos, setTodos }) => {
  const handleCheckboxChange = async () => {
    try {
      const updatedTodo = {
        ...todo,
        complete: !todo.complete,
      };

      const response = await axios.put(
        `https://665eb0331e9017dc16f0ea5e.mockapi.io/todos/${todo.id}`,
        updatedTodo
      );
      onUpdateTodo && onUpdateTodo(response.data);
    } catch (error) {
      console.error(`Failed to update todo: ${error}`);
    }
  };
  const id=1
  const handleUpdate = () => {};
  const Remove = useRef(null);
  const handleDelete = () => {
    // Remove.current.remove();
    axios
      .delete(`https://665eb0331e9017dc16f0ea5e.mockapi.io/todos/${todo.id}`)
      .then((response) => {
        // console.log(response.data);
        setTodos(todos.filter(todo => todo.id !== response.data.id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card" ref={Remove}>
      <h2>Title:{todo.title}</h2>
      <h5>Description:&nbsp; {todo.discription}</h5>
      <select
        name="status"
        id="status"
        className={todo.complete ? "complete" : "notcomplete"}
        defaultValue={todo.complete}
        onChange={handleCheckboxChange}
      >
        <option value={false}>Not Complete</option>
        <option value={true}>Complete</option>
      </select>
      <div className="btn-div">
        <button className="btn-update" onClick={handleUpdate}>
          Update
        </button>
        <button className="btn-del" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
