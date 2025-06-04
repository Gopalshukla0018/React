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
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddBttonClicked();
    }
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
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />{" "}
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
