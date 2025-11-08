import { Sparkles } from 'lucide-react'

export default function PremiumHeader() {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-6 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
          <Sparkles className="h-7 w-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">Premium Tasks</h1>
          <p className="text-sm text-white/70">A delightfully polished to-do experience</p>
        </div>
      </div>
    </header>
  )
}
