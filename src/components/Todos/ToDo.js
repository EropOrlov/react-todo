function ToDo(props) {
  const complete = props.todo.completed
    ? 'bg-white text-black line-through'
    : 'bg-slate-600 text-white';
  return (
    <div
      className={`flex gap-2 w-80 items-center justify-between py-1 px-2 rounded-md ${complete}`}
    >
      <div className="flex gap-4 items-center">
        <img src="/todo.svg" className="size-4 object-none" alt="img" />
        <p className="text-xl cursor-pointer" onClick={() => props.completeTodo(props.todo.id)}>{props.todo.title}</p>
      </div>

      <div className="flex pl-4 gap-2">
        <img
          src="/bin.png"
          className="size-4 object-none cursor-pointer"
          alt="img"
          onClick={() => props.removeTodo(props.todo.id)}
        />
        <img
          src="/complete.png"
          className="size-4 object-none cursor-pointer"
          alt="img"
          onClick={() => props.completeTodo(props.todo.id)}
        />
      </div>
    </div>
  );
}

export default ToDo;
