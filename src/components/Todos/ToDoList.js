import ToDo from './ToDo';

function ToDoList(props) {
  return (
    <div className="flex flex-col gap-5 items-center">
      {props.todos.map((todo, index) => (
        <ToDo
          todo={todo}
          key={todo.id}
          removeTodo={props.removeTodo}
          completeTodo={props.completeTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;
