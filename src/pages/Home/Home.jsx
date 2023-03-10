// import React from 'react';
// import styles from './Home.module.css';
// import { Link, useNavigate } from 'react-router-dom';
// import Card from '../../components/shared/Card/Card';
// import Button from '../../components/shared/Button/Button';

// const Home = () => {
//     const signInLinkStyle = {
//         color: '#0077ff',
//         fontWeight: 'bold',
//         textDecoration: 'none',
//         marginLeft: '10px',
//     };
//     const navigate = useNavigate();
//     function startRegister() {
//         navigate('/authenticate');
//     }
//     return (
//         <div className={styles.cardWrapper}>
//             <Card title="Welcome to Codershouse!" icon="logo">
//                 <p className={styles.text}>
//                     We’re working hard to get Codershouse ready for everyone!
//                     While we wrap up the finishing youches, we’re adding people
//                     gradually to make sure nothing breaks
//                 </p>
//                 <div>
//                     <Button onClick={startRegister} text="Let's Go" />
//                 </div>
//                 <div className={styles.signinWrapper}>
//                     <span className={styles.hasInvite}>
//                         Have an invite text?
//                     </span>
//                     {/* <Link style={signInLinkStyle} to="/login">
//                         Sign in
//                     </Link> */}
//                 </div>
//             </Card>
//         </div>
//     );
// };

// export default Home;

import "../../App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Insights from "./components/Insights";
import OurRecipe from "./components/OurRecipe";
import Explore from "./components/Explore";
import World from "./components/World";
import Imagine from "./components/Imagine";

function Home() {
  //   const navigate = useNavigate();
  //   function startRegister() {
  //     navigate("/authenticate");
  //   }
  return (
    <>
      <div className="bg-primary-black overflow-hidden">
        {/* <Navbar /> */}
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
        {/* <World /> */}
        <div className="relative">
          {/* <Insights /> */}
          <div className="gradient-04 z-0" />
          {/* <Feedback /> */}
        </div>
      </div>
    </>
  );
}

export default Home;
