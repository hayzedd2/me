import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Technologies from "./components/Technologies";
import Toolbar from "./components/Toolbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Respositories from "./components/Repositories";
export default function Home() {
  return (
    <main className="max-w-[40rem] text-[#3a3a3a] px-5 mx-auto py-10 relative min-h-screen">
      <Navbar />
      <HeroSection />
      <Technologies />
      <Projects />
      <Respositories/>
      <Contact />
      <Toolbar />
    </main>
  );
}
