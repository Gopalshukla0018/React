import AppName from "./components/AppName";
import Addtodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const handleonNewItem = (itemName, itemDueDate) => {
    if (itemName.trim() === "" || itemDueDate.trim() === "") {
      return;
    }
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setToDoItems(newTodoItems);
    console.log(`itemDeleted: ${todoItemName}`);
  };

  return (
    <center className="todo-container ">
      <AppName />
      <Addtodo onNewItem={handleonNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems Gopal={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
