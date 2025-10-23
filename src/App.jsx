import "./App.css";

function App() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-5xl font-bold text-green-600">Cat</h1>

          <ul className="hidden md:flex flex-1 justify-center space-x-8 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-green-500">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-500">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-500">Services</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-500">Blog</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="pt-24">
        <h1 className="text-4xl font-bold text-green-600 text-center mt-4"></h1>
        <Blog />
      </div>
    </>
  );
}

function Blog() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 mt-20"> <br /> <br /> <br />
      <h3 className="text-3xl font-semibold text-center mb-8 text-green-600">
        Blog
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



const products = [
  {
    id: 1,
    title: "Cat Toy Mouse",
    description: "Soft and playful mouse toy for cats to enjoy for hours.",
  },
  {
    id: 2,
    title: "Cat Scratching Post",
    description: "Durable scratching post to keep your cat active and happy.",
  },
  {
    id: 3,
    title: "Cat Bed Deluxe",
    description: "Comfortable and cozy cat bed for sweet naps.",
  },
  {
    id: 4,
    title: "Cat Food Bowl",
    description: "Stylish and easy-to-clean food bowl for your cat.",
  },
];


export default App;
