import { useState } from 'react';
import { TypeTodos } from '../types';

type AddTodoProps = {
  setAdding: (adding: boolean) => void;
  todos: TypeTodos;
  setTodos: (todos: TypeTodos) => void;
};

const AddTodo = ({ setAdding, todos, setTodos }: AddTodoProps) => {
  const [task, setTask] = useState('');

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([{ id: todos.length + 1, task, completed: false }, ...todos]);
    setAdding(false);
  };

  const handleCancel = () => {
    setAdding(false);
  };

  return (
    <div>
      <h2 className="text-3xl py-2">New task</h2>
      <form onSubmit={handleSave}>
        <div className="py-4">
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="outline-none w-full py-2 px-4 bg-slate-800 border-2 border-slate-400  rounded-md"
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={handleCancel}
            className="text-lg border-2 border-gray-300 hover:border-gray-50 text-gray-300 hover:text-gray-50 transition  py-1 px-4 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-lg border-2 border-white bg-gray-300 hover:bg-gray-50 transition text-slate-800 py-1 px-4 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
