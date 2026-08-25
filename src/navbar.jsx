import { MapPin, Search, Menu } from "lucide-react";

function Navbar({ onMenuClick }) {
  return (
    <nav className="bg-[#D9D9D9] border-b border-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       
        <a href="/" className="flex items-center gap-2">
          <div className="bg-[#10B981] text-white p-2 rounded-lg">
            <MapPin size={22} />
          </div>

          <span className="text-2xl font-extrabold text-[[#10B981] tracking-tight">
            StagePoa
          </span>
        </a>

        
        <div className="hidden md:flex items-center gap-8">

          

          <a
            href="/stages"
            className="text-gray-600 hover:text-green-600 transition"
          >
            Find a Stage
          </a>
          
          <a
            href="/"
            className="text-green-700 font-medium hover:text-green-800 transition"
          >
            How It Works
          </a>

          {/* <a
            href="/about"
            className="text-gray-600 hover:text-green-600 transition"
          >
            About
          </a> */}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          {/* <button
            className="text-gray-600 hover:text-green-600 transition"
            aria-label="Search"
          >
            <Search size={22} />
          </button> */}

          
          <button 
  className="hidden sm:block 
  bg-[#10B981] 
  text-black 
  px-5 py-2.5 
  rounded-lg 
  font-extrabold 
  border-2 border-black
  border-r-4 border-b-4
  hover:bg-[#10B981] 
  transition"
>
  Login 
</button>

          {/* Sidebar Menu */}
          <button
            onClick={onMenuClick}
            className="text-gray-600 hover:text-green-600 transition"
            aria-label="Open menu"
          >
            <Menu size={25} />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;