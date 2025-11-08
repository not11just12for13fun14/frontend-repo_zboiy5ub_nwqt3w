import TaskItem from './TaskItem'

export default function TaskList({ tasks, onToggle, onDelete, onToggleStar, filter }) {
  const filtered = tasks
    .filter((t) => (filter === 'all' ? true : filter === 'active' ? !t.completed : t.completed))
    .sort((a, b) => Number(b.starred) - Number(a.starred))

  if (!filtered.length) {
    return (
      <div className="rounded-xl border border-slate-200/60 bg-white p-8 text-center text-slate-500">
        Nothing here yet — add your first premium task
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {filtered.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onToggleStar={onToggleStar}
        />
      ))}
    </ul>
  )
}
