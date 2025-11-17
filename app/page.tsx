
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Header } from "./components/header";

export default function Page() {
  return (
    <section className="w-full">
      <main className="max-w-[40rem] text-[#3a3a3a] px-4 mx-auto py-10">
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
    </section>
  );
}
