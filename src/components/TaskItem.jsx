import { useState } from 'react'
import { CheckCircle2, Circle, Trash2, Star } from 'lucide-react'

export default function TaskItem({ task, onToggle, onDelete, onToggleStar }) {
  const [hover, setHover] = useState(false)

  return (
    <li
      className={`group relative flex items-center gap-3 rounded-xl border p-3 transition-all ${
        task.completed
          ? 'border-emerald-200/60 bg-emerald-50'
          : 'border-slate-200/60 bg-white'
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        onClick={() => onToggle(task.id)}
        className="inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-500 transition hover:text-emerald-600"
        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {task.completed ? (
          <CheckCircle2 className="h-6 w-6 text-emerald-600" />
        ) : (
          <Circle className="h-6 w-6" />
        )}
      </button>

      <span
        className={`flex-1 select-none text-sm transition ${
          task.completed ? 'text-slate-500 line-through' : 'text-slate-800'
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => onToggleStar(task.id)}
        className={`hidden items-center justify-center rounded-md p-1 transition group-hover:flex ${
          task.starred ? 'text-amber-500' : 'text-slate-400 hover:text-amber-500'
        }`}
        aria-label={task.starred ? 'Unstar task' : 'Star task'}
      >
        <Star className={`h-5 w-5 ${task.starred ? 'fill-amber-400/20' : ''}`} />
      </button>

      <button
        onClick={() => onDelete(task.id)}
        className={`hidden items-center justify-center rounded-md p-1 text-slate-400 transition hover:text-rose-500 group-hover:flex ${
          hover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-label="Delete task"
      >
        <Trash2 className="h-5 w-5" />
      </button>

      <div className="pointer-events-none absolute inset-0 -z-0 rounded-xl opacity-0 transition group-hover:opacity-100" />
    </li>
  )
}
