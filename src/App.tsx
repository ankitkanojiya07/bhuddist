import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DetailedDestinations from "./components/DetailedDestinations";
import ToursPage from "./pages/ToursPage";
import BuddhistToursPage from "./pages/BuddhistToursPage";
import AboutBuddhismPage from "./pages/AboutBuddhismPage";
import PackagesPage from "./pages/PackagesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DetailedDestinations />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/buddhist-tours" element={<BuddhistToursPage />} />
          <Route path="/about-buddhism" element={<AboutBuddhismPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
