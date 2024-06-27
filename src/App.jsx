import { useState } from "react";
import TrashIcon from "./assets/icon.png"

function App() {
 

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function addTodo() {
    if (input.trim()) {
      setTodos([input, ...todos]);
      setInput('');
    }
  };

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h2>ToDo</h2>
      <div className="val">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />

        <button className="button" onClick={addTodo}>Add</button>
        </div>
      <ul >
        {todos.map((todo, index) => (
          <li key={index} className="task-box">
            {todo}
            <img src={TrashIcon} onClick={() => deleteTodo(index)}/>
          </li>
        ))}
      </ul>
    </div>
  );

}
 
  


export default App
