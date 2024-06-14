import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import MyBlog from "./components/my-blog";
import MyWorks from "./components/my-works";
import Navbar from "./components/navbar";
import SkillAndExperience from "./components/skill-and-experience";
import { cn } from "./lib/utils";

function App() {
  return (
    <>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-20",
          "text-lg lg:text-2xl"
        )}
      >
        <Navbar />
      </header>
      <main className="overflow-x-clip">
        <Home />
        <About />
        <SkillAndExperience />
        <MyWorks />
        <MyBlog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
