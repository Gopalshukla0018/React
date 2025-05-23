import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem";
const TodoItems = ({ Gopal }) => {
  return (
    <div className={styles.itemsContainer}>
      {Gopal.map((item) => (
        <TodoItem name={item.name} dueDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;