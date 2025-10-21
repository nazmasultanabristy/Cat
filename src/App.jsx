import './App.css'

function App() {
  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          
          <h1 className="text-3xl font-bold text-green-600">Cat</h1>

          <ul className="margin:8px hidden md:flex flex-1 justify-center space-x-30 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default App