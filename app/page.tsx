import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection'
import Technologies from "./components/Technologies";
import Toolbar from "./components/Toolbar";

export default function Home() {
  return (
    <main className="max-w-[55rem] px-5 mx-auto py-10 relative min-h-screen">
      <Navbar />
      <HeroSection/>
      <Technologies/>
      <Toolbar/>
    </main>
  );
}
