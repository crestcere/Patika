import styles from "./styles.module.css";
const ToggleAll = ({ todo, setTodo }) => {
  const setMarkt = (item) => {
    switch (item.mark) {
      case true:
        item.mark = false;
        break;
      case false:
        item.mark = true;
        break;
    }
    setTodo([...todo]);
  };
  return (
    <div className={styles.toggleBody}>
      {todo.map((item, index) => (
        <div className={styles.toggleItems} key={index}>
          <div>{item.todo}</div>
          <div>Marked: {JSON.stringify(item.mark)}</div>
          <button
            onClick={() => {
              setMarkt(item);
            }}
          >
            Mark
          </button>
        </div>
      ))}
    </div>
  );
};
export default ToggleAll;
