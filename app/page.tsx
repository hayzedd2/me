import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Respositories from "./components/Repositories";
import About from "./components/About";
export default function Page() {
  return (
    <section className="w-full">
      <main className="max-w-[40rem] text-[#3a3a3a] px-5 mx-auto py-10">
        <Navbar />
        <About />
        <Technologies />
        <Projects />
        <Respositories />
        <Contact />
      </main>
    </section>
  );
}
