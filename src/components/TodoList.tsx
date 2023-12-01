import { TypeTodos } from '../types';
import Todo from './Todo';

type TodoListProps = {
  searchedTodos: TypeTodos;
  handleEdit: (id: number) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (completed: boolean, id: number) => void;
};

const TodoList = ({
  searchedTodos,
  handleEdit,
  deleteTodo,
  completeTodo,
}: TodoListProps) => {
  return (
    <div className="py-2">
      {searchedTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
