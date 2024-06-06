import axios from "axios";
import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Todo from "./Todo";

export const loader = async () => {
  const todos = await axios.get(
    "https://665eb0331e9017dc16f0ea5e.mockapi.io/todos"
  );
  return { todos: todos.data };
};

const todos = () => {
  const { todos: initialTodos } = useLoaderData();
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [complete, setComplete] = useState(false);

  const handleUpdateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };
  const post = () => {
    console.log(title, desc, complete);
    let currentDate = new Date().toISOString();

    const newTodo = {
      title: title,
      discription: desc,
      complete: complete,
      createAt: currentDate,
      updateAt: currentDate,
    };
    axios
      .post("https://665eb0331e9017dc16f0ea5e.mockapi.io/todos", newTodo)
      .then((response) => {
        console.log(response.data);
        setDesc("");
        setTitle("");
        setComplete(false);
        setTodos([...todos,response.data])
      });
  };

  return (
    <div>
      <hr />
      <h1>Todos</h1>
      <hr />
      <center><div className="card">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <select
          name="status"
          id="status"
          onChange={(e) => {
            setComplete(e.target.value);
          }}
        >
          <option value={false}>Not Complete</option>
          <option value={true}>Complete</option>
        </select>
        <button onClick={post}>post</button>
      </div></center>
      <div className="cont">
        {todos.map((todo) => {return(
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} onUpdateTodo={handleUpdateTodo} />
        )})}
      </div>
    </div>
  );
};

export default todos;
