import "../../App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Explore from "./components/Explore";
import Carousal from "./components/Carousal";

function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Carousal />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          <div className="gradient-04 z-0" />
        </div>
      </div>
    </>
  );
}

export default Home;
