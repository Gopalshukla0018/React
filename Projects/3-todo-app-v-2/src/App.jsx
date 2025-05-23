import AppName from "./components/AppName";
import Addtodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/05/2025",
    },
    {
      name: "Go To College",
      dueDate: "04/05/2025",
    },
    {
      name: "Go To Market",
      dueDate: "04/05/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <Addtodo />
      <TodoItems Gopal={todoItems} />
    </center>
  );
}

export default App;
