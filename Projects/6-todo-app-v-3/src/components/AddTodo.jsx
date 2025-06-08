import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function Addtodo({ onNewItem }) {

  const todoNameElement = useRef();
  const todoDateElement=useRef();

 

  const handleAddBttonClicked = () => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
 
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddBttonClicked();
    }
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddBttonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter your ToDo"
            value={todoName}
            onChange={handleNameChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={todoDateElement}
          value={dueDate} onChange={handleDateChange} />{" "}
        </div>
        <div className="col-2">
          {" "}
          <button className="btn btn-success kg-btn">
            <BiMessageAdd />
          </button>{" "}
        </div>
      </form>
    </div>
  );
}
export default Addtodo;
