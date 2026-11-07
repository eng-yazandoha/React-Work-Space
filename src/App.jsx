
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import EmptyState from './components/EmptyState';

function App() {
  // 1. State — مصدر الحقيقة الوحيد
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all'); // all | active | done

  // 2. Lifecycle: useEffect — مزامنة مع localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // ← يعمل عند تغير tasks فقط

  // 3. Lifecycle: عنوان الصفحة
  useEffect(() => {
    document.title = `المهام (${tasks.length})`;
  }, [tasks]);

  // 4. Event Handlers
  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(), // ← مفتاح فريد
      text,
      done: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // 5. Conditional Rendering — تصفية القائمة
  const visibleTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  return (
    <Layout>
      <Header />
      <TaskInput onAdd={addTask} />

      {/* أزرار الفلترة */}
      <div className="filters">
        {['all', 'active', 'done'].map((f) => (
          <button
            key={f}
            className={filter === f ? 'active' : ''}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'الكل' : f === 'active' ? 'قيد التنفيذ' : 'مكتملة'}
          </button>
        ))}
      </div>

      {/* Conditional Rendering: قائمة فارغة أم مهام */}
      {visibleTasks.length === 0 ? (
        <EmptyState />
      ) : (
        <TaskList
          tasks={visibleTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      )}
    </Layout>
  );
}
export default App;