import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">カウンター</h2>
      <div className="text-center">
        <div className="text-4xl font-bold text-blue-600 mb-6">{count}</div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200 transform hover:scale-105"
          >
            -1
          </button>
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200 transform hover:scale-105"
          >
            +1
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
