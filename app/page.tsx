import Projects from "./pages/projects";
import About from "./pages/about";
import Home from "./pages/home";

export default function Root() {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <Home />
      <Projects />
      <About />
    </main>
  );
}
