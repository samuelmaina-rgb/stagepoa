import { MapPin, Search, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="bg-green-600 text-white p-2 rounded-lg">
            <MapPin size={22} />
          </div>

          <span className="text-2xl font-extrabold text-green-700 tracking-tight [font-family:'Montserrat',sans-serif]">
  StagePoa
</span>
        </a>

        
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-green-700 font-medium"
          >
            Home
          </a>

          <a
            href="/stages"
            className="text-gray-600 hover:text-green-600 transition"
          >
            Find a Stage
          </a>

          <a
            href="/about"
            className="text-gray-600 hover:text-green-600 transition"
          >
            About
          </a>
        </div>

       
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-600 hover:text-green-600 transition">
            <Search size={21} />
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition">
            Find a Stage
          </button>
        </div>

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 space-y-4">
          <a
            href="/"
            className="block text-green-700 font-medium"
          >
            Home
          </a>

          <a
            href="/stages"
            className="block text-gray-600"
          >
            Find a Stage
          </a>

          <a
            href="/about"
            className="block text-gray-600"
          >
            About
          </a>

          <button className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium">
            Find a Stage
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;