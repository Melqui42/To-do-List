import React from "react";

import "./Style.scss";

import { BsTrash } from "react-icons/bs";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

function ComponentTask(props) {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="Task">
      <span className="Id">{props.id}</span>
      <div className={!checked ? "Title" : "TitleChecked"}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <ul className="ListButtons">
        <li className="Item">
          <button onClick={() => setChecked(!checked)}>
            {!checked ? <FaRegSquare /> : <FaRegCheckSquare />}
          </button>
        </li>
        <li className="Item">
          <button onClick={props.handleDeleteTask}>
            <BsTrash />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default function App() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [toDoList, setToDoList] = React.useState([]);

  function addTask() {
    if (name === "") {
      window.alert("Insirar um nome!!!");
    } else {
      const newTask = {
        id: toDoList.length,
        name: name,
        description: description,
      };

      setToDoList([...toDoList, newTask]);
      setName("");
      setDescription("");
    }
  }

  function deleteTask(id) {
    const deleteTask = toDoList.filter((obj) => obj.id !== id);
    setToDoList(deleteTask);
  }

  return (
    <div className="App">
      <h1>
        To do List (<span>React JS</span>)
      </h1>
      <div className="Panel">
        <div className="Inputs">
          <label htmlFor="">
            Nome:
            <input
              type="text"
              name=""
              id=""
              placeholder="Insira um nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Descrição:
            <input
              type="text"
              name=""
              id=""
              placeholder="Insira uma descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="Container">
        <ul className="List">
          {toDoList.map((obj) => {
            return (
              <li className="Item">
                <ComponentTask
                  name={obj.name}
                  description={obj.description}
                  id={obj.id}
                  handleDeleteTask={() => deleteTask(obj.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
