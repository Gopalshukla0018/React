import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeydown }) => {
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Food Item here"
        className={styles.foodItem}
        onKeyDown={handleKeydown}
      />
    </div>
  );
};

export default FoodInput;
