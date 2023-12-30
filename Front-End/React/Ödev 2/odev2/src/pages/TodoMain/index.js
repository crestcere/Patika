import { useState, useEffect } from "react";
import ToggleActive from "./components/ToggleActive";
import ToggleCompleted from "./components/ToggleCompleted";
import ToggleAll from "./components/ToggleAll";

const TodoMain = () => {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([{ todo: "", mark: false }]);
  const [toggleAll, setToggleAll] = useState(true);
  const [toggleActive, setToggleActive] = useState(false);
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleToggle = (toggle) => {
    switch (toggle) {
      case "all":
        setToggleAll(true);
        setToggleActive(false);
        setToggleCompleted(false);
        break;
      case "active":
        setToggleAll(false);
        setToggleActive(true);
        setToggleCompleted(false);
        break;
      case "completed":
        setToggleAll(false);
        setToggleActive(false);
        setToggleCompleted(true);
        break;
    }
  };

  const handleSave = () => {
    setTodo([...todo, { todo: data, mark: false }]);
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <>
      <p>Todo</p>
      <input placeholder={"Todo"} name={"todo"} onChange={handleChange} />
      <button onClick={() => handleSave()}>Add</button>
      {toggleAll && <ToggleAll todo={todo} setTodo={setTodo} />}
      {toggleActive && <ToggleActive todo={todo} setTodo={setTodo} />}
      {toggleCompleted && <ToggleCompleted todo={todo} setTodo={setTodo} />}
      <button onClick={() => handleToggle("all")}>All</button>
      <button onClick={() => handleToggle("active")}>Active</button>
      <button onClick={() => handleToggle("completed")}>Completed</button>
    </>
  );
};

export default TodoMain;
