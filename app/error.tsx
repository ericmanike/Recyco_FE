
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
      <p className="text-gray-600 mt-2">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  )
}
