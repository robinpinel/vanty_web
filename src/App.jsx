import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/hero/Hero";
import { AboutSection } from "./components/about/AboutSection";
import { GallerySection } from "./components/gallery/GallerySection";
import { EventsSection } from "./components/events/EventsSection";
import { ContactSection } from "./components/contact/ContactSection";

/**
 * App component
 * Main application layout with semantic HTML structure
 * Anchor-based navigation for all sections
 */
function App() {
  return (
    <>
      <Header />

      <main className="main">
        {/* Hero section */}
        <Hero />

        {/* About section */}
        <AboutSection />

        {/* Gallery section */}
        <GallerySection />

        {/* Events section */}
        <EventsSection />

        {/* Contact section */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
 