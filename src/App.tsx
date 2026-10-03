import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import RoomDetailPage from "./pages/RoomDetailPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import AboutPage from "./pages/AboutPage";
import StayPage from "./pages/StayPage";
import ContactPage from "./pages/ContactPage";
import PoliciesPage from "./pages/PoliciesPage";
import NotFoundPage from "./pages/NotFoundPage";
import { rooms } from "./data/hotel";

const titles: Record<string, string> = { "/": "A little closer to paradise", "/rooms": "Rooms & suites", "/experiences": "Experiences", "/about": "Our story", "/stay": "Plan your stay", "/contact": "Contact & getting here", "/policies": "Good to know" };

function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const room = rooms.find((item) => pathname === `/rooms/${item.id}`);
    document.title = `${room?.name ?? titles[pathname] ?? "Page not found"} — Aurelia`;
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return <BrowserRouter>
    <RouteEffects />
    <a href="#main" className="fixed -top-20 left-5 z-50 bg-white p-4 focus:top-3">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1} className="outline-none!">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:roomId" element={<RoomDetailPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stay" element={<StayPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>;
}




