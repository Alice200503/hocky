import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">Adam Zhao</h1>
        <h2 className="text-2xl">#19 | Les Seigneurs des Mille-Iles</h2>
      </div>
    </main>
  )
}
