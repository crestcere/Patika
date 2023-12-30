const ToggleCompleted = ({ todo, setTodo }) => {
  return (
    <div>
      {todo.map((item, index) => {
        if (item.mark === true) {
          return (
            <div key={index}>
              <div>
                <div>{item.todo}</div>
                <button>Mark</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ToggleCompleted;
