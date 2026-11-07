// src/components/TaskItem.jsx
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.done ? 'done' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>
      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        title="حذف"
      >
        🗑️
      </button>
    </li>
  );
}
export default TaskItem;