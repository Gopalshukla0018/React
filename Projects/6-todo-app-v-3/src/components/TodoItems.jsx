import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem";
const TodoItems = ({ Gopal , onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {Gopal.map((item) => (
        <TodoItem name={item.name} dueDate={item.dueDate}
        onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  ); 
};
export default TodoItems;