import AppName from "./components/AppName";
import Addtodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <Addtodo />
      <div className="items-container">
      <Todoitem1 />
      <Todoitem2 />
      </div>
     
    </center>
  );
}

export default App;
