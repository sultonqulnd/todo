import { useState } from 'react';
import { TypeTodo } from '../types';

type TodoProps = {
  todo: TypeTodo;
  handleEdit: (id: number) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (completed: boolean, id: number) => void;
};

const Todo = ({ todo, handleEdit, deleteTodo, completeTodo }: TodoProps) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.target.checked);
    completeTodo(completed, todo.id);
  };

  return (
    <div className="bg-slate-800 p-2 mb-2 flex justify-between rounded-md">
      <div className=" flex gap-4 items-center">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-md cursor-pointer"
          checked={completed}
          onChange={handleCompletedChange}
        />

        <p className="text-lg">{todo.task}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => handleEdit(todo.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: 'gold' }}
          >
            <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path>
            <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path>
          </svg>
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            style={{ fill: 'crimson' }}
          >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Todo;
