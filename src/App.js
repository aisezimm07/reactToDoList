import React from 'react';
import Main from "./Main";
import axios from "axios";
import Todo from "./Todo";
import './style.css';

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    async function getTodos() {
      try {
        const res = await axios.get("http://localhost:9000/todos");
        setTodos(res.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    getTodos();
  }, [todos]);

  const deleteDoneTasks = async () => {   
    try {
      await axios.delete("http://localhost:9000/todos", {
        params: { isDone: true },
      });
    
     
    } catch (error) {
      console.error("Error deleting done tasks:", error);
    }
  };

  const deleteAllTasks = async () => {
    try {
      await axios.delete("http://localhost:9000/todos");
    
     
    } catch (error) {
      console.error("Error deleting all tasks:", error);
    }
  };

  return (
    <div className="div">
      <Main />
      <h3 className="text-1">TodoList</h3>
      <div className="div-3">
        <div>
          <button className="button">All</button>
        </div>
        <div>
          <button className="button">Done</button>
        </div>
        <div>
          <button className="button">Todo</button>
        </div>
      </div>

      {todos.map((obj) => (
        <Todo key={obj.title + obj.id} id={obj.id} isDone ={obj.isDone} title={obj.title} />
      ))}

      <div className="div-100">
        <div>
          <button className="last-b" onClick={() => deleteDoneTasks()}>
            Delete done tasks
          </button>
        </div>

        <div>
          <button className="last-b" onClick={() => deleteAllTasks()}>
            Delete all tasks
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;