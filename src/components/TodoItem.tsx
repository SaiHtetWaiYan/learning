import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const handleEdit = () => {
    const newText = prompt('Edit todo:', todo.text);
    if (newText !== null && newText.trim() !== '') {
      onEdit(todo.id, newText.trim());
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <div className="todo-actions">
        <button onClick={handleEdit} className="edit-btn">
          Edit
        </button>
        <button onClick={() => onDelete(todo.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
