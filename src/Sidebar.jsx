import { useEffect, useState } from "react";
import {
  MapPin,
  Map,
  Heart,
  Clock,
  Info,
  Settings,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";

import { auth, db } from "./firebase/firebase";
import { useFavorites } from "./context/FavoritesContext";

function Sidebar({ isOpen, onClose }) {
  // Top-level accordion
  const [openMainSection, setOpenMainSection] =
    useState("navigation");

  // Navigation accordion
  const [openNavigationSection, setOpenNavigationSection] =
    useState(null);

  const [recentSearches, setRecentSearches] = useState([]);
  const [user, setUser] = useState(null);

  const { favorites, removeFavorite } = useFavorites();

  const toggleMainSection = (section) => {
    setOpenMainSection((current) =>
      current === section ? null : section
    );
  };

  const toggleNavigationSection = (section) => {
    setOpenNavigationSection((current) =>
      current === section ? null : section
    );
  };

  // Authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Recent searches
  useEffect(() => {
    if (!user) {
      setRecentSearches([]);
      return;
    }

    const searchesQuery = query(
      collection(db, "search_logs"),
      where("uid", "==", user.uid),
      orderBy("createdAt", "desc"),
      limit(5)
    );

    const unsubscribe = onSnapshot(
      searchesQuery,
      (snapshot) => {
        const searches = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRecentSearches(searches);
      },
      (error) => {
        console.error(
          "Error getting recent searches:",
          error
        );
      }
    );

    return () => unsubscribe();
  }, [user]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-screen w-72 z-50
          bg-white lg:bg-white/70
          lg:backdrop-blur-xl
          border-l border-black/10
          shadow-xl
          transform transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/70">
          <div>
            <h2 className="text-xl font-extrabold text-[#10B981]">
              Explore
            </h2>

            <p className="text-sm text-gray-500">
              Navigate StagePoa
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#10B981] transition"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">

          {/* =========================
              NAVIGATION
          ========================== */}
          <div className="border-b border-gray-200/70">
            <button
              onClick={() =>
                toggleMainSection("navigation")
              }
              className="w-full flex items-center justify-between px-4 py-3 font-extrabold text-gray-800"
            >
              Navigation

              <ChevronDown
                size={19}
                className={`transition-transform duration-300 ${
                  openMainSection === "navigation"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {openMainSection === "navigation" && (
              <div className="pb-3">

                {/* Nearby Stages */}
                <Link
                  to="/nearby"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <MapPin size={20} />
                  <span>Nearby Stages</span>
                </Link>

                {/* Stage Map */}
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <Map size={20} />
                  <span>Stage Map</span>
                </a>

                {/* Saved Stages */}
                <button
                  onClick={() =>
                    toggleNavigationSection("saved")
                  }
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <div className="flex items-center gap-3">
                    <Heart size={20} />
                    <span>Saved Stages</span>
                  </div>

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      openNavigationSection === "saved"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* Saved Stages Content */}
                {openNavigationSection === "saved" && (
                  <div className="ml-7 mr-2 pb-2">
                    {favorites.length === 0 ? (
                      <p className="px-3 py-2 text-sm text-gray-500">
                        No saved stages yet.
                      </p>
                    ) : (
                      favorites.map((stage) => (
                        <div
                          key={stage.id}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#10B981]/10 transition"
                        >
                          <Link
                            to={`/results?destination=${encodeURIComponent(
                              stage.stageName
                            )}`}
                            onClick={onClose}
                            className="flex-1 text-sm font-medium text-gray-600 hover:text-[#10B981] truncate"
                          >
                            {stage.stageName}
                          </Link>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFavorite(stage.id);
                            }}
                            className="text-[#10B981] hover:text-red-500 transition"
                            aria-label={`Remove ${stage.stageName} from saved stages`}
                          >
                            <Heart
                              size={17}
                              fill="currentColor"
                            />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* Recent Searches */}
                <button
                  onClick={() =>
                    toggleNavigationSection("recent")
                  }
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <div className="flex items-center gap-3">
                    <Clock size={20} />
                    <span>Recent Searches</span>
                  </div>

                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      openNavigationSection === "recent"
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* Recent Searches Content */}
                {openNavigationSection === "recent" && (
                  <div className="ml-7 mr-2 pb-2">
                    {!user ? (
                      <p className="px-3 py-2 text-sm text-gray-500">
                        Sign in to see recent searches.
                      </p>
                    ) : recentSearches.length === 0 ? (
                      <p className="px-3 py-2 text-sm text-gray-500">
                        No recent searches yet.
                      </p>
                    ) : (
                      recentSearches.map((search) => (
                        <Link
                          key={search.id}
                          to={`/results?destination=${encodeURIComponent(
                            search.destination
                          )}`}
                          onClick={onClose}
                          className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-[#10B981]/10 hover:text-[#10B981] transition truncate"
                        >
                          {search.destination}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* =========================
              MORE
          ========================== */}
          <div className="border-b border-gray-200/70">
            <button
              onClick={() => toggleMainSection("more")}
              className="w-full flex items-center justify-between px-4 py-3 font-extrabold text-gray-800"
            >
              More

              <ChevronDown
                size={19}
                className={`transition-transform duration-300 ${
                  openMainSection === "more"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {openMainSection === "more" && (
              <div className="pb-3">

                {/* About */}
                <Link
                  to="/about"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <Info size={20} />
                  <span>About StagePoa</span>
                </Link>

                {/* Settings */}
              

              </div>
            )}
          </div>

        </nav>
      </aside>
    </>
  );
}

export default Sidebar;