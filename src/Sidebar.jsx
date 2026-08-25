import { useState } from "react";
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

function Sidebar({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState("navigation");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

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
        className={`
          fixed top-0 right-0 h-screen w-72 z-50
          bg-white lg:bg-white/70
          lg:backdrop-blur-xl
          border-l border-black/10
          shadow-xl
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
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
          >
            <X size={24} />
          </button>

        </div>

        {/* Accordion Navigation */}
        <nav className="p-4">

          {/* Navigation Accordion */}
          <div className="border-b border-gray-200/70">

            <button
              onClick={() => toggleSection("navigation")}
              className="w-full flex items-center justify-between px-4 py-3 font-extrabold text-gray-800"
            >
              Navigation

              <ChevronDown
                size={19}
                className={`transition-transform duration-300 ${
                  openSection === "navigation"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSection === "navigation"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-3">

                {/* Nearby Stages */}
                <a
                  href="/nearby"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg
                  text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <MapPin size={20} />
                  <span>Nearby Stages</span>
                </a>

                {/* Stage Map */}
                <a
                  href="/map"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg
                  text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <Map size={20} />
                  <span>Stage Map</span>
                </a>

                {/* Saved Stages */}
                <a
                  href="/saved"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg
                  text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <Heart size={20} />
                  <span>Saved Stages</span>
                </a>

                {/* Recent Searches */}
                <a
                  href="/recent"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg
                  text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <Clock size={20} />
                  <span>Recent Searches</span>
                </a>

              </div>
            </div>

          </div>

          {/* More Accordion */}
          <div className="border-b border-gray-200/70">

            <button
              onClick={() => toggleSection("more")}
              className="w-full flex items-center justify-between px-4 py-3 font-extrabold text-gray-800"
            >
              More

              <ChevronDown
                size={19}
                className={`transition-transform duration-300 ${
                  openSection === "more"
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSection === "more"
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-3">

                {/* About */}
                <a
                  href="/about"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg
                  text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <Info size={20} />
                  <span>About StagePoa</span>
                </a>

                {/* Settings */}
                <a
                  href="/settings"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg
                  text-gray-700 hover:bg-[#10B981]/10 hover:text-[#10B981] transition"
                >
                  <Settings size={20} />
                  <span>Settings</span>
                </a>

              </div>
            </div>

          </div>

        </nav>

      </aside>
    </>
  );
}

export default Sidebar;