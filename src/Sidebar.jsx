import {
  MapPin,
  Map,
  Heart,
  Clock,
  Info,
  Settings,
  X,
} from "lucide-react";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Dark overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 shadow-xl
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">

          <div>
            <h2 className="text-xl font-bold text-green-700">
              Explore
            </h2>

            <p className="text-sm text-gray-500">
              Navigate StagePoa
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-green-600 transition"
          >
            <X size={24} />
          </button>

        </div>

        {/* Links */}
        <nav className="p-4 space-y-2">

          <a
            href="/nearby"
            className="flex items-center gap-3 px-4 py-3 rounded-lg
            text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            <MapPin size={20} />
            <span>Nearby Stages</span>
          </a>

          <a
            href="/map"
            className="flex items-center gap-3 px-4 py-3 rounded-lg
            text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            <Map size={20} />
            <span>Stage Map</span>
          </a>

          <a
            href="/saved"
            className="flex items-center gap-3 px-4 py-3 rounded-lg
            text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            <Heart size={20} />
            <span>Saved Stages</span>
          </a>

          <a
            href="/recent"
            className="flex items-center gap-3 px-4 py-3 rounded-lg
            text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            <Clock size={20} />
            <span>Recent Searches</span>
          </a>

          <div className="border-t border-gray-100 my-4" />

          <a
            href="/about"
            className="flex items-center gap-3 px-4 py-3 rounded-lg
            text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            <Info size={20} />
            <span>About StagePoa</span>
          </a>

          <a
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg
            text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
          >
            <Settings size={20} />
            <span>Settings</span>
          </a>

        </nav>
      </aside>
    </>
  );
}

export default Sidebar;