import "../../App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import OurRecipe from "./components/OurRecipe";
import Explore from "./components/Explore";
import Imagine from "./components/Imagine";

function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          <OurRecipe />
          <div className="gradient-04 z-0" />
          <Imagine />
        </div>
        <div className="relative">
          <div className="gradient-04 z-0" />
        </div>
      </div>
    </>
  );
}

export default Home;
