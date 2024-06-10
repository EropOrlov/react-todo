import React, { useState } from 'react';

function ToDoForm(props) {
  const [todo, setTodo] = useState('');
  function submit(e) {
    e.preventDefault();
    props.addTodo(todo);
    setTodo('')
  }

  return (
    <form onSubmit={submit} className='flex gap-5 items-center mx-auto'>
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} className='bg-white rounded-sm text-xl' />
      <button type="submit" className='text-white text-lg bg-stone-500 rounded-sm px-1 py-1'>Submit</button>
    </form>
  );
}

export default ToDoForm;
