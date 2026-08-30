import { useEffect, useState } from "react";
import { MapPin, Menu, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  async function handleSignOut() {
    try {
      await signOut(auth);
      setProfileOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <nav className="bg-[#D9D9D9] border-b border-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <Link to="/" className="flex items-center gap-2">

          <div className="bg-[#10B981] text-white p-2 rounded-lg">
            <MapPin size={22} />
          </div>

          <span className="text-2xl font-extrabold text-[#10B981] tracking-tight">
            StagePoa
          </span>

        </Link>

        
        <div className="hidden md:flex items-center gap-8">

          <a
            href="/#find-a-stage"
            className="text-gray-600 hover:text-green-600 transition"
          >
            Find a Stage
          </a>

          <a
            href="/#how-it-works"
            className="text-green-700 font-medium hover:text-green-800 transition"
          >
            How It Works
          </a>

        </div>

      
        <div className="flex items-center gap-4">

          

          {!user ? (

            <Link
              to="/login"
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
            </Link>

          ) : (

            <div className="relative hidden sm:block">

              
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2
                bg-[#10B981]
                text-black
                px-4 py-2.5
                rounded-lg
                font-extrabold
                border-2 border-black
                border-r-4 border-b-4
                hover:bg-[#10B981]
                transition"
              >

                <span className="max-w-[140px] truncate">
                  {user.displayName || user.email}
                </span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              
              {profileOpen && (
                <div
                  className="absolute right-0 mt-3 w-64
                  bg-white
                  border-2 border-black
                  rounded-xl
                  shadow-lg
                  p-4
                  z-50"
                >

                  <div className="mb-4">

                    <p className="font-extrabold text-black truncate">
                      {user.displayName || "StagePoa User"}
                    </p>

                    <p className="text-sm text-gray-500 truncate mt-1">
                      {user.email}
                    </p>

                  </div>

                  <button
                    onClick={handleSignOut}
                    className="w-full
                    bg-[#10B981]
                    text-black
                    px-4 py-2.5
                    rounded-lg
                    font-extrabold
                    border-2 border-black
                    border-r-4 border-b-4
                    hover:bg-[#10B981]
                    transition"
                  >
                    Sign Out
                  </button>

                </div>
              )}

            </div>

          )}

          
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