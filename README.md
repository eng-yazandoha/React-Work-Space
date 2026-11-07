# Work Without AI
# 📝 Task Manager — React Lab 01

> A hands-on, code-first React lab that teaches the **modern React ecosystem** by building a fully functional Task Manager application.

> **Skill level:** Beginner → Intermediate  
> **Stack:** React 18+ · Vite · Plain CSS · localStorage  
> **Focus:** Modern Hooks API (2026 standards)

---
## 📸 Screenshots

### Home Screen
<img src="assets/screenshot-home.png" alt="Task Manager – Home screen" width="700" />

### Filtering Tasks
<p align="center">
  <img src="assets/screenshot-filters.png" alt="All / Active / Done filters" width="45%" />
  <img src="assets/screenshot-empty.png" alt="Empty state" width="45%" />
</p>

## 📑 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Component Hierarchy](#-component-hierarchy)
- [Data Flow](#-data-flow)
- [State Shape](#-state-shape)
- [React Concepts Covered](#-react-concepts-covered)
- [Common Pitfalls](#-common-pitfalls-demonstrated)
- [Learning Checklist](#-learning-checklist)
- [Manual Testing Guide](#-manual-testing-guide)
- [Available Scripts](#️-available-scripts)
- [Troubleshooting](#-troubleshooting)
- [Resources](#-resources)
- [License](#-license)

---

## 🚀 Quick Start

```bash
# 1. Clone this repository
git clone <your-repo-url>

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev

# 4. Open http://localhost:5173 in your browser
Requirements: Node.js ≥ 18, npm ≥ 9.

✨ Features
#	Feature	What It Demonstrates	Where to Look
1	Add a task	Controlled form, validation, unique ID generation	TaskInput.jsx, App.jsx
2	Toggle completion	Immutable state updates via .map()	TaskItem.jsx, App.jsx
3	Delete a task	State filtering via .filter()	TaskItem.jsx, App.jsx
4	Filter (All / Active / Done)	Conditional rendering + derived state	App.jsx
5	Persist tasks across reloads	useEffect + localStorage	App.jsx
6	Auto-focus input after adding	useRef for direct DOM access	TaskInput.jsx
7	Empty state UI	Conditional rendering with a friendly fallback	App.jsx, EmptyState.jsx
8	Live tab title with task count	useEffect triggered on state change	App.jsx
9	Reusable layout	Composition via children	Layout.jsx
10	Bonus: Loading wrapper	Higher-Order Component (HOC)	hoc/withLoading.jsx
11	Bonus: Toggle logic reuse	Render Props pattern	components/Toggle.jsx
Behavior summary:

You type a task → the button is only enabled when text is non-empty and trimmed.

Adding a task prepends it to the list and clears the input.

Each task has a stable unique ID → safe re-renders after delete/reorder.

Tasks survive a full page refresh (thanks to localStorage).

Filters update the visible list without mutating the master array.

📂 Project Structure
text
task-manager/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Layout.jsx        # Wrapper using `children` (Composition)
│   │   ├── Header.jsx        # Stateless UI component
│   │   ├── TaskInput.jsx     # Form + useRef + controlled input
│   │   ├── TaskList.jsx      # .map() + stable keys
│   │   ├── TaskItem.jsx      # Props + event handlers
│   │   ├── EmptyState.jsx    # Pure UI component (no state, no props)
│   │   └── Toggle.jsx        # Bonus: Render Props example
│   ├── hoc/
│   │   └── withLoading.jsx   # Bonus: Higher-Order Component
│   ├── App.jsx               # Root state, useEffect, handlers
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
Why this structure?

components/ — one component per file. Small, focused, testable.

hoc/ — houses higher-order components separately (a common convention).

App.jsx — the orchestrator: owns state, passes callbacks down, decides layout.

main.jsx — never needs to change; it just mounts <App />.

🧩 Component Hierarchy
text
App (owns all state)
├── Layout (children wrapper)
│   ├── Header
│   ├── TaskInput        ← calls onAdd(task) up to App
│   ├── Filters (inline) ← calls setFilter(...) in App
│   ├── EmptyState       ← shown when list is empty
│   └── TaskList
│       └── TaskItem[]   ← calls onToggle(id) / onDelete(id) up to App
Rule of thumb: State lives in the closest common ancestor (App), and callbacks travel down while events travel up.

🔁 Data Flow
text
        ┌──────────────────────────────────────────────┐
        │                    App                       │
        │  state: tasks[], filter                      │
        │  handlers: addTask, toggleTask, deleteTask   │
        └──────────────────────────────────────────────┘
                 │                          ▲
                 │ props (data)             │ callbacks (events)
                 ▼                          │
        ┌──────────────────────────────────────────────┐
        │  TaskInput · TaskItem · TaskList · Layout    │
        └──────────────────────────────────────────────┘
Unidirectional data flow — the hallmark of React. This is why:

Children never mutate parent state directly.

Every change triggers a re-render of App, which re-passes fresh props down.

🗃️ State Shape
The app has one primary piece of state and one UI-only state:

js
// Primary state — the data
tasks = [
  { id: "uuid-1", text: "Learn React",    done: false },
  { id: "uuid-2", text: "Build a project", done: true  }
]

// UI state — which filter is active
filter = "all" | "active" | "done"
Rule: Always create new arrays/objects on update. Never mutate.

js
// ✅ Correct — immutable update
setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));

// ❌ Wrong — mutates state
tasks[0].done = true;
setTasks(tasks); // React may not re-render
🧠 React Concepts Covered
Every concept below is applied in real code in this project — not just mentioned.

1. CLI + Vite — Project Scaffolding
Vite is the modern standard for React apps (replaces create-react-app).

bash
npm create vite@latest task-manager -- --template react
Why Vite? Instant dev-server startup (ES Modules), fast HMR (Hot Module Replacement), and tiny production bundles via Rollup/Rolldown.

2. Functional Components + JSX
Every UI piece is a function returning JSX.

jsx
function Header() {
  return <h1>📝 Task Manager</h1>;
}
JSX rules respected:

Single root element per return.

className (not class).

{} for JS expressions.

Capitalized component names.

3. Props vs State
Props	State
Owner	Parent	Component itself
Mutability	Read-only	Mutable via setter
Triggers re-render?	Yes (when parent re-renders)	Yes (when setter is called)
Example here	task, onToggle	tasks, filter, text
jsx
// Props: TaskItem receives these, never changes them
function TaskItem({ task, onToggle, onDelete }) { /* ... */ }

// State: App owns `tasks` and updates it
const [tasks, setTasks] = useState([]);
4. Conditional Rendering
Three patterns used across the project:

jsx
// 1. Ternary — choose between two UI paths
{visibleTasks.length === 0 ? <EmptyState /> : <TaskList ... />}

// 2. Logical AND — render only when condition is true
{hasItems && <Filters />}

// 3. Conditional attribute / class
<button disabled={!text.trim()}>Add</button>
<li className={`task-item ${task.done ? 'done' : ''}`}>
5. Composition (children)
Layout doesn't know what it wraps — it just styles the container. This is React's preferred alternative to inheritance.

jsx
function Layout({ children }) {
  return <div className="app-container"><main>{children}</main></div>;
}
Usage:

jsx
<Layout>
  <Header />
  <TaskInput onAdd={addTask} />
</Layout>
6. Lists & Keys
Rendering arrays with .map() and using stable unique keys.

jsx
{tasks.map(task => (
  <TaskItem key={task.id} task={task} onToggle={onToggle} />
))}
Why task.id and not index?
With index, React can reuse the wrong DOM node after a delete → the text appears wrong because it keeps old DOM while receiving new props. See Common Pitfalls.

We generate IDs with crypto.randomUUID() — a modern browser API — ensuring uniqueness without a library.

7. Lifecycle — useEffect
Two side effects are demonstrated:

jsx
// 1. Sync tasks → localStorage (runs only when tasks changes)
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

// 2. Update document.title (runs only when tasks.length changes)
useEffect(() => {
  document.title = `Tasks (${tasks.length})`;
}, [tasks.length]);
Dependency array cheat-sheet:

Array	Runs when
[]	Once after mount (never again)
[x]	After mount + whenever x changes
(omitted)	After every render — usually a bug
The lab also conceptually covers cleanup functions (returning a function from useEffect), which is essential for timers, subscriptions, and event listeners.

8. Refs — useRef
Two uses, both important:

A. Direct DOM access (auto-focus the input):

jsx
const inputRef = useRef(null);
// ...
<input ref={inputRef} />
// later:
inputRef.current.focus();
B. Values that must NOT trigger re-render (e.g., timer IDs — discussed conceptually):

jsx
const intervalRef = useRef(null);
useRef vs useState:

useState change → re-render.

useRef.current change → no re-render.

9. Events
React wraps native events in Synthetic Events for cross-browser consistency.

jsx
// camelCase names (not `onclick` / `onsubmit`)
<form onSubmit={handleSubmit}>
<input onChange={e => setText(e.target.value)} />
<button onClick={() => onDelete(task.id)}>Delete</button>
Key patterns used:

e.preventDefault() — blocks native form submission (would reload the page).

Arrow function with arguments — onClick={() => onDelete(task.id)} (not onClick={onDelete(task.id)} which would fire immediately).

10. Higher-Order Component (HOC) — Bonus
A function that takes a component and returns a new component.

jsx
function withLoading(Component) {
  return function WithLoading({ isLoading, ...props }) {
    if (isLoading) return <div className="loading">Loading…</div>;
    return <Component {...props} />;
  };
}
Usage:

jsx
const TaskListWithLoading = withLoading(TaskList);
<TaskListWithLoading isLoading={loading} tasks={visibleTasks} />
⚠️ Note: HOCs are legacy — modern code prefers custom hooks. But HOCs still appear in react-redux (connect), older react-router (withRouter), and some UI libraries. Knowing them is essential for reading real-world codebases.

HOC vs Composition:

Composition → <Wrapper><Child /></Wrapper> (JSX)

HOC → const New = withX(Old) (function call, not JSX)

11. Render Props — Bonus
A pattern where a component owns state/logic and exposes it to a parent via a function prop that returns JSX.

jsx
function Toggle({ render }) {
  const [on, setOn] = useState(false);           // ← owns state
  const toggle = () => setOn(prev => !prev);     // ← owns logic
  return <>{render({ on, toggle })}</>;          // ← calls parent's function
}
Usage:

jsx
<Toggle
  render={({ on, toggle }) => (
    <button onClick={toggle}>{on ? '🟢 ON' : '🔴 OFF'}</button>
  )}
/>
Two non-negotiable conditions for Render Props:

The child owns the state/logic.

The function prop returns JSX.

⚠️ Passing a callback like onClick={handleClick} is NOT Render Props — it's just a Callback Prop. Render Props are replaced in modern code by custom hooks (useToggle).

⚠️ Common Pitfalls Demonstrated
The lab deliberately touches these traps so you recognize them in the wild:

Pitfall	Symptom	Fix
Using index as key	Task text persists after deletion	Use a stable unique ID
Mutating state directly (tasks.push(...))	UI doesn't re-render	Use setTasks(prev => [...prev, x])
Forgetting e.preventDefault()	Page reloads on submit	Add it at the top of handleSubmit
Missing useEffect dependency	Stale localStorage	Include all reactive values in []
Calling the handler (onClick={fn(x)})	Fires immediately on render	Wrap in arrow: onClick={() => fn(x)}
Controlled input with no onChange	Input becomes read-only	Always pair value with onChange
✅ Learning Checklist
After completing this lab, you should be able to:

☑ Scaffold a React app with Vite.
☑ Write functional components and JSX correctly.
☑ Explain the difference between props and state — and know which one to use.
☑ Render lists with .map() and stable keys.
☑ Perform immutable state updates (map, filter, spread).
☑ Use useEffect for side effects with correct dependencies.
☑ Access DOM elements with useRef.
☑ Handle user events the React way.
☑ Apply conditional rendering (ternary, &&, conditional attributes).
☑ Build reusable UI with Composition (children).
☑ Recognize HOC and Render Props patterns.
☑ Avoid the six most common beginner bugs.
