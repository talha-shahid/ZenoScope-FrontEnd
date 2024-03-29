import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Authenticate from "./pages/Authentication/Authenticate";
import "./App.css";
import Activate from "./pages/Activate/Activate";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useSelector } from "react-redux";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./components/Loader/Loader";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Simulations from "./pages/Simulations/Simulations";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SimulationsHome from "./pages/Simulations/SimulationsHome";
import Users from "./pages/Users/Users";
import SortingVisualizer from "./pages/Simulations/Algorithms/Sorting/SortingVisualizer";
import PathFinder from "./pages/Simulations/Algorithms/PathFinder/PathFinder";

function App() {
  const { loading } = useLoadingWithRefresh();
  return loading ? (
    <Loader message="Loading, please wait..." />
  ) : (
    <BrowserRouter>
      <div className="bg-primary-black ">
        <Navigation />
      </div>
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

        <Route path="*" element={<PageNotFound />} />
        <Route path="/simulations" element={<SimulationsHome />} exact></Route>
        <Route path="/simulations/:id" element={<Simulations />}></Route>
        <Route
          path="/simulations/algorithms/sorting"
          element={<SortingVisualizer />}
        ></Route>
        <Route
          path="/simulations/algorithms/pathfinder"
          element={<PathFinder />}
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
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
//------------------------------------------------
//Guest Route
// - if user is authenticated, redirect to /dashboard
// - else, render the <Home /> component
const GuestRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to="/dashboard" /> : children;
};

//Semi Protected Route
// - if user is not authenticated, redirect to /
// - else if user is authenticated not activated, render the <Activate /> component
// - else if(meaning user is both authenticated and activated), redirect to /dashboard
const SemiProtectedRoute = ({ children }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  if (!isAuth) {
    return <Navigate to="/" />;
  } else {
    if (!user.activated) {
      return children;
    } else {
      return <Navigate to="/dashboard" />;
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
