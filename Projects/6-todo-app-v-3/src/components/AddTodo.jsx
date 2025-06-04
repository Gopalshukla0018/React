import { useState } from "react";

function Addtodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddBttonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your ToDo"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          value={dueDate}
          onChange={handleDateChange} />{" "}
        </div>
        <div className="col-2">
          {" "}
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleAddBttonClicked}
          >
            Add
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
