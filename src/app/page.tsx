import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Adam Zhao</h1>
        <h2 className="text-2xl text-center mb-8">#19 | Les Seigneurs des Mille-Iles</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">5</p>
                <p className="text-gray-600">Games</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">1</p>
                <p className="text-gray-600">Goals</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2</p>
                <p className="text-gray-600">Assists</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3</p>
                <p className="text-gray-600">Points</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
