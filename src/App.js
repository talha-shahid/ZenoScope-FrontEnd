import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authentication/Authenticate";
import "./App.css";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
import { useSelector } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
          exact
        ></Route>

        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        ></Route>

        <Route
          path="/activate"
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          }
        ></Route>

        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
//------------------------------------------------
//Guest Route
// - if user is authenticated, redirect to /rooms
// - else, render the <Home /> component
const GuestRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to="/rooms" /> : children;
};

//Semi Protected Route
// - if user is not authenticated, redirect to /
// - else if user is authenticated not activated, render the <Activate /> component
// - else if(meaning user is both authenticated and activated), redirect to /rooms
const SemiProtectedRoute = ({ children }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" />;
  } else {
    if (!user.activated) {
      return children;
    } else {
      return <Navigate to="/rooms" />;
    }
  }
};
//Protected Route
const ProtectedRoute = ({ children }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" />;
  } else {
    if (!user.activated) {
      return <Navigate to="/activate" />;
    } else {
      return children;
    }
  }
};

export default App;
