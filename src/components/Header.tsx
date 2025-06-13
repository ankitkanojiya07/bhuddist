import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 sticky top-0 z-50 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top bar - hidden when scrolled */}
      <div
        className={`bg-red-600 text-white py-2 px-4 transition-all duration-300 ${
          scrolled
            ? "max-h-0 opacity-0 overflow-hidden py-0"
            : "max-h-20 opacity-100"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@buddhisttour.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>Spiritual Tours Across India</span>
          </div>
        </div>
      </div>{" "}
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div
              className={`w-10 h-10 ${
                scrolled ? "bg-[#ed3237]" : "bg-transparent border border-white"
              } rounded-full flex items-center justify-center transition-all duration-300`}
            >
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <h1
              className={`text-2xl font-bold ${
                scrolled ? "text-gray-800" : "text-white"
              } transition-colors duration-300`}
            >
              Buddhist Tours
            </h1>
          </Link>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive("/")
                  ? scrolled
                    ? "text-[#ed3237]"
                    : "text-white font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#ed3237]"
                  : "text-white hover:text-red-200"
              }`}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className={`font-medium transition-colors ${
                isActive("/destinations")
                  ? scrolled
                    ? "text-[#ed3237]"
                    : "text-white font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#ed3237]"
                  : "text-white hover:text-red-200"
              }`}
            >
              Destinations
            </Link>
            <Link
              to="/tours"
              className={`font-medium transition-colors ${
                isActive("/tours")
                  ? scrolled
                    ? "text-[#ed3237]"
                    : "text-white font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#ed3237]"
                  : "text-white hover:text-red-200"
              }`}
            >
              Tours
            </Link>
            <Link
              to="/buddhist-tours"
              className={`font-medium transition-colors ${
                isActive("/buddhist-tours")
                  ? scrolled
                    ? "text-[#ed3237]"
                    : "text-white font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#ed3237]"
                  : "text-white hover:text-red-200"
              }`}
            >
              Buddhism Tour
            </Link>
            <Link
              to="/about-buddhism"
              className={`font-medium transition-colors ${
                isActive("/about-buddhism")
                  ? scrolled
                    ? "text-[#ed3237]"
                    : "text-white font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#ed3237]"
                  : "text-white hover:text-red-200"
              }`}
            >
              About Buddhism
            </Link>
            <Link
              to="/packages"
              className={`font-medium transition-colors ${
                isActive("/packages")
                  ? scrolled
                    ? "text-[#ed3237]"
                    : "text-white font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#ed3237]"
                  : "text-white hover:text-red-200"
              }`}
            >
              Packages
            </Link>
            <Link
              to="/testimonials"
              className={`font-medium transition-colors ${
                isActive("/testimonials")
                  ? scrolled
                    ? "text-[#ed3237]"
                    : "text-white font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#ed3237]"
                  : "text-white hover:text-red-200"
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive("/contact")
                  ? scrolled
                    ? "text-[#ed3237]"
                    : "text-white font-semibold"
                  : scrolled
                  ? "text-gray-700 hover:text-[#ed3237]"
                  : "text-white hover:text-red-200"
              }`}
            >
              Contact
            </Link>{" "}
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium border ${
                scrolled
                  ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  : "border-white text-white hover:bg-white/20"
              }`}
            >
              Book Now
            </button>
          </div>{" "}
          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 pb-4 border-t pt-4 ${
              scrolled ? "border-gray-200" : "border-white/20"
            }`}
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`transition-colors font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-[#ed3237]"
                    : "text-white hover:text-red-200"
                }`}
              >
                Home
              </Link>
              <Link
                to="/destinations"
                className={`transition-colors font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-[#ed3237]"
                    : "text-white hover:text-red-200"
                }`}
              >
                Destinations
              </Link>
              <Link
                to="/tours"
                className={`transition-colors font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-[#ed3237]"
                    : "text-white hover:text-red-200"
                }`}
              >
                Tours
              </Link>
              <Link
                to="/buddhist-tours"
                className={`transition-colors font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-[#ed3237]"
                    : "text-white hover:text-red-200"
                }`}
              >
                Buddhism Tour
              </Link>
              <Link
                to="/about-buddhism"
                className={`transition-colors font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-[#ed3237]"
                    : "text-white hover:text-red-200"
                }`}
              >
                About Buddhism
              </Link>
              <Link
                to="/packages"
                className={`transition-colors font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-[#ed3237]"
                    : "text-white hover:text-red-200"
                }`}
              >
                Our Packages
              </Link>
              <Link
                to="/testimonials"
                className={`transition-colors font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-[#ed3237]"
                    : "text-white hover:text-red-200"
                }`}
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className={`transition-colors font-medium ${
                  scrolled
                    ? "text-gray-700 hover:text-[#ed3237]"
                    : "text-white hover:text-red-200"
                }`}
              >
                Contact
              </Link>{" "}
              <button
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium border w-full ${
                  scrolled
                    ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    : "border-white text-white hover:bg-white/20"
                }`}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
