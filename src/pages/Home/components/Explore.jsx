import { useState } from "react";
import styles from "../../../styles";
import ExploreCard from "./secondary/ExploreCard";

const exploreWorlds = [
  {
    id: "data-structures",
    imgUrl: "/DataTree.png",
    title: "Data Structures",
  },
  {
    id: "algorithms",
    imgUrl: "/Algorithms.png",
    title: "Algorithms",
  },
  {
    id: "physics",
    imgUrl: "/Physics.png",
    title: "Physics",
  },
];

const Explore = () => {
  const [active, setActive] = useState("algorithms");

  return (
    <section className={`py-5`} id="explore">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <p
          className={`font-normal text-[14px] text-secondary-white text-center`}
        >
          | Explore
        </p>
        <h2
          className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center`}
        >
          Choose the world you want <br className="md:block hidden" /> to
          explore
        </h2>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
