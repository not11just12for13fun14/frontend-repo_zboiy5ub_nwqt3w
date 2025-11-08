import { useEffect, useMemo, useState } from 'react'
import PremiumHeader from './components/PremiumHeader'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { ListFilter, CheckCircle2, Clock } from 'lucide-react'

function App() {
  const [tasks, setTasks] = useState(() => {
    const raw = localStorage.getItem('premium_tasks')
    return raw ? JSON.parse(raw) : []
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('premium_tasks', JSON.stringify(tasks))
  }, [tasks])

  const stats = useMemo(() => {
    const total = tasks.length
    const done = tasks.filter((t) => t.completed).length
    return { total, done, left: total - done }
  }, [tasks])

  const addTask = (text) => {
    setTasks((prev) => [
      { id: crypto.randomUUID(), text, completed: false, starred: false, createdAt: Date.now() },
      ...prev,
    ])
  }

  const toggleTask = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id))

  const toggleStar = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, starred: !t.starred } : t)))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-2xl px-4 py-10 md:py-14">
        <PremiumHeader />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span className="text-sm">Completed</span>
            </div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">{stats.done}</div>
          </div>
          <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="h-4 w-4 text-indigo-600" />
              <span className="text-sm">Remaining</span>
            </div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">{stats.left}</div>
          </div>
          <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <ListFilter className="h-4 w-4 text-fuchsia-600" />
              <span className="text-sm">Filter</span>
            </div>
            <div className="mt-3 flex gap-2">
              {['all', 'active', 'completed'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                    filter === f
                      ? 'bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {f[0].toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <TaskInput onAdd={addTask} />
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onToggleStar={toggleStar}
            filter={filter}
          />
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Your tasks are saved locally in your browser.
        </p>
      </div>
    </div>
  )
}

export default App
