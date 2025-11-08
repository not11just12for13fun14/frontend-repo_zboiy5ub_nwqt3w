import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="group relative flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white p-2 shadow-sm ring-1 ring-black/5 transition-all focus-within:border-indigo-400 focus-within:ring-indigo-300/30">
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-fuchsia-500/0 opacity-0 blur-sm transition-all duration-500 group-focus-within:opacity-20" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a premium task..."
        className="z-10 flex-1 bg-transparent px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:outline-none"
      />
      <button
        type="submit"
        className="z-10 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:brightness-110 active:translate-y-px"
        aria-label="Add task"
      >
        <Plus className="h-4 w-4" />
        Add
      </button>
    </form>
  )
}
