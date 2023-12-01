import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import Modal from './Modal';
import TodoList from './TodoList';
import { TypeTodo } from '../types';

const Todos = () => {
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'Reading book',
      completed: false,
    },
    {
      id: 2,
      task: 'Doing sport',
      completed: false,
    },
    {
      id: 3,
      task: 'Doing work',
      completed: false,
    },
  ]);
  const [todoEditing, setTodoEditing] = useState<TypeTodo>(todos[0]);
  const [search, setSearch] = useState('');
  const [searchedTodos, setSearchedTodos] = useState(todos);

  const handleEdit = (id: number) => {
    console.log(id);
    setEditing(true);
    const td = todos.find((todo) => todo.id === id) || todos[0];
    setTodoEditing(td);
  };

  const editTodo = (todo: TypeTodo) => {
    setTodos(todos.map((td) => (td.id === todo.id ? todo : td)));
  };

  const deleteTodo = (id: number) => {
    if (confirm('Are you sure you want to delete this task?')) {
      setTodos(todos.filter((td) => td.id !== id));
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (search) {
      setSearchedTodos(
        todos.filter((td) =>
          td.task.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setSearchedTodos(todos);
    }
  };

  const completeTodo = (cm: boolean, id: number) => {
    setTodos(todos.map((td) => (td.id === id ? { ...td, completed: cm } : td)));
  };

  return (
    <div className="mx-auto p-8  w-1/2">
      <input
        style={{
          background: 'url(search.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center left 5px',
        }}
        type="text"
        placeholder="Search"
        id="search"
        name="search"
        value={search}
        onChange={handleSearchChange}
        className="outline-none w-full py-2 px-8 bg-slate-800 border-2 border-slate-400  rounded-md"
      />
      <div className="flex justify-between items-center py-2">
        <h1 className="text-3xl py-2">Tasks</h1>
        <button
          onClick={() => setAdding(true)}
          className="bg-slate-800 py-2 px-4 rounded-md"
        >
          Add task
        </button>
      </div>
      {adding ? (
        <Modal>
          <AddTodo setAdding={setAdding} todos={todos} setTodos={setTodos} />
        </Modal>
      ) : null}
      {editing ? (
        <Modal>
          <EditTodo
            setEditing={setEditing}
            editTodo={editTodo}
            todoEditing={todoEditing}
          />
        </Modal>
      ) : null}
      <TodoList
        searchedTodos={searchedTodos}
        handleEdit={handleEdit}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
};

export default Todos;
