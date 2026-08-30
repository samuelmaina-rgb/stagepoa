import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  // Navigate to Home and scroll to a specific section
  const scrollToSection = (sectionId) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <footer className="bg-[#676E7E] border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 py-5">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

          {/* StagePoa */}
          <div>
            <h2 className="text-xl font-extrabold text-white">
              StagePoa
            </h2>

            <p className="mt-1 text-white/70 text-xs max-w-xs">
              Find your stage. Get where you're going.
            </p>
          </div>


          {/* Product */}
          <div>
            <h3 className="text-white text-sm font-extrabold mb-2">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-1 text-xs">

              {/* Home */}
              <Link
                to="/"
                className="text-white/70 hover:text-[#10B981] transition"
              >
                Home
              </Link>


              {/* Find a Stage */}
              <button
                onClick={() => scrollToSection("find-a-stage")}
                className="text-left text-white/70 hover:text-[#10B981] transition"
              >
                Find a Stage
              </button>


              {/* How It Works */}
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-white/70 hover:text-[#10B981] transition"
              >
                How It Works
              </button>

            </div>
          </div>


          {/* Community */}
          <div>
            <h3 className="text-white text-sm font-extrabold mb-2">
              COMMUNITY
            </h3>

            <div className="flex flex-col gap-1 text-xs">

              <Link
                to="/about"
                className="text-white/70 hover:text-[#10B981] transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-white/70 hover:text-[#10B981] transition"
              >
                Contact
              </Link>

              <Link
                to="/login"
                className="text-white/70 hover:text-[#10B981] transition"
              >
                Login
              </Link>

            </div>
          </div>


          {/* Morning Reports */}
          <div>
            <h3 className="text-white text-sm font-extrabold mb-2">
              LIVE MORNING REPORTS
            </h3>

            <p className="text-white/70 text-xs leading-relaxed">
              Get the 6AM Nairobi CBD traffic and stage overview in your inbox.
            </p>

            <div className="flex mt-2">

              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-white border-2 border-black border-r-0 rounded-l-lg px-2.5 py-1.5 text-xs outline-none"
              />

              <button
                className="bg-[#10B981] text-white px-3 py-1.5 rounded-r-lg font-extrabold text-xs border-2 border-black border-l-2 border-b-4"
              >
                Join
              </button>

            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-white/20 mt-4 pt-3">

          <p className="text-white/50 text-[10px]">
            © 2026 StagePoa. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

