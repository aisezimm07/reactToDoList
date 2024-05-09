import React from 'react';
import axios from 'axios';

function Main() {
  const [value, setValue] = React.useState("");

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const postTodo = async () => {
    const todo = {
      title: value,
      isDone: false,
    };
    try {
      const res = await axios.post("http://localhost:9000/todos", todo);
      console.log(res);
    
      setValue("");

    } catch (error) {
      console.error("Error posting todo:", error);
    }
  };

  return (
    <div className="div">
      <h3 className="text-1">TodoInput</h3>
      <div className="border-1">
        <div className="div-2">
          <div className="border-2"></div>
          <input
            style={{ width: "87%", fontSize: "20px" }}
            type="text"
            value={value}
            onChange={onChangeValue}
          />
        </div>
        <button className="button-1" onClick={() => postTodo()}>
          Add new task
        </button>
      </div>
    </div>
  );
}

export default Main;
