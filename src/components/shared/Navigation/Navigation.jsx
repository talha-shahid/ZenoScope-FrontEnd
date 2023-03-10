// import React from "react";
// import { Link } from "react-router-dom";
// import { logout } from "../../../http";
// import { setAuth } from "../../../store/authSlice";
// import styles from "./Navigation.module.css";
// import { useDispatch, useSelector } from "react-redux";

// const Navigation = () => {
//   const dispatch = useDispatch();
//   const { isAuth, user } = useSelector((state) => state.auth);

//   const brandStyle = {
//     color: "#fff",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "22px",
//     display: "flex",
//     alignItems: "center",
//   };

//   const logoText = {
//     marginLeft: "10px",
//   };

//   async function logoutUser() {
//     try {
//       const { data } = await logout();
//       dispatch(setAuth(data));
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <nav className={`${styles.navbar} container`}>
//       <Link style={brandStyle} to="/">
//         <img src="/images/logo.png" alt="logo" />
//         <span style={logoText}>Codershouse</span>
//       </Link>
//       {isAuth && (
//         <div className={styles.navRight}>
//           <h3>{user?.name}</h3>
//           <Link to="/">
//             <img
//               className={styles.avatar}
//               src={user.avatar ? user.avatar : "/images/monkey-avatar.png"}
//               width="40"
//               height="40"
//               alt="avatar"
//             />
//           </Link>
// <button className={styles.logoutButton} onClick={logoutUser}>
//   <img src="/images/logout.png" alt="logout" />
// </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../../../utils/motion";
import styles from "../../../styles";
import navStyles from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../http";
import { setAuth } from "../../../store/authSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Button from "../../../components/shared/Button/Button";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const [dropDown, setDropDown] = useState(false);

  async function logoutUser() {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }

  function startRegister() {
    navigate("/authenticate");
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-3 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />

      <div className={`${styles.innerWidth} flex flex-row justify-between`}>
        <div className="flex items-center justify-center z-50 cursor-pointer">
          <img
            src="/logo3.png"
            alt="logo"
            className="mt-[2px] w-[24px] h-[24px] object-contain "
          />
          <Link to="/" className="">
            <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
              ZENOSCOPE
            </h2>
          </Link>
        </div>

        {isAuth && (
          <motiondiv
            className="cursor-pointer relative"
            onClick={() => setDropDown(!dropDown)}
          >
            <motion.img
              // initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ type: "tween", duration: 1.3 }}
              className={navStyles.avatar}
              src={user.avatar ? user.avatar : "/images/monkey-avatar.png"}
              width="40"
              height="40"
              alt="avatar"
            />

            {dropDown && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-1 mt-1 bg-[#1d1d1dfd] w-[200px] h-[180px] rounded-xl p-6"
              >
                <h3 className="font-normal text-xl text-center">
                  {user?.name}
                </h3>
                <div className="mt-2 flex justify-center">
                  <div className="font-bold">Ph#</div>
                  <div>{user?.phone} </div>
                </div>
                <div className="mt-5">
                  <Button onClick={logoutUser} text="Logout" />
                </div>
              </motion.div>
            )}
          </motiondiv>
        )}

        {!isAuth && location.pathname === "/" && (
          <div>
            <Button onClick={startRegister} text="Join Us" />
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
