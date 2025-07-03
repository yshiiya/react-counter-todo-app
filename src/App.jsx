import Counter from './components/Counter'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">React テストアプリ</h1>
          <p className="text-gray-600">カウンターとTodoリストのサンプルアプリケーション</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <Counter />
          </div>
          <div>
            <TodoList />
          </div>
        </div>
        
        <footer className="text-center mt-12 text-gray-500">
          <p>© 2025 React Test Project</p>
        </footer>
      </div>
    </div>
  )
}

export default App
