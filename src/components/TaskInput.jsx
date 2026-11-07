// src/components/TaskInput.jsx
import { useState, useRef } from 'react';

function TaskInput({ onAdd }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null); // ← Ref للوصول لعنصر الـ DOM

  const handleSubmit = (e) => {
    e.preventDefault(); // ← منع إعادة تحميل الصفحة
    const trimmed = text.trim();
    if (!trimmed) return;

    onAdd(trimmed);            // ← Callback Prop (ليس Render Prop)
    setText('');               // ← إعادة تعيين الحالة
    inputRef.current.focus();  // ← Ref in action: تركيز تلقائي
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="أضف مهمة جديدة..."
        autoFocus
      />
      <button type="submit" disabled={!text.trim()}>
        إضافة
      </button>
    </form>
  );
}
export default TaskInput;