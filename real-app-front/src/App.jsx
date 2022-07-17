import Footer from "./components/footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignOut from "./components/Signout";
import SignUpBiz from "./components/SignUpBiz";
import MyCards from "./components/MyCards";
import CreateCard from "./components/CreateCard";
import ProtectedRoute from "./components/common/protectRoute";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="/my-cards/create-card"
            element={
              <ProtectedRoute bizOnly>
                <CreateCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-cards"
            element={
              <ProtectedRoute bizOnly>
                <MyCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="signubiz"
            element={<SignUpBiz redirect="/my-cards/create-card" />}
          />
          <Route path="signup" element={<SignUp redirect="/signin" />} />
          <Route path="signin" element={<SignIn redirect="/" />} />
          <Route path="signout" element={<SignOut redirect="/" />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
