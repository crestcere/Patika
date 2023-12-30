const ToggleActive = ({ todo, setTodo }) => {
  return (
    <div>
      <p>Toggle Active</p>
      {todo.map((item, index) => {
        if (item.mark === false) {
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
      {/*{todo.map((item, index) => (*/}
      {/*  <div key={index}>*/}
      {/*    <div>*/}
      {/*      <div>{item.todo}</div>*/}
      {/*      <button>Mark</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
};
export default ToggleActive;
