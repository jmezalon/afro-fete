import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Landing from "./components/Landing";
import SingleEventType from "./components/events/SingleEventType";
import Profile from "./components/user/Profile";
import PostPhoto from "./components/user/PostPhoto";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Singup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { findMe } from "./features/users/usersSlice";
import Photogallery from "./components/gallery/Photogallery";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findMe());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <hr
        style={{
          height: "1px",
          backgroundColor: "rgb(201 199 199)",
          border: "none",
          width: "100%",
          marginBottom: "5%",
        }}
      />
      <Routes>
        <Route exact path="/auth/signup">
          <Singup />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/post-a-photo">
          <PostPhoto />
        </Route>
        <Route exact path="/photo-gallery">
          <Photogallery />
        </Route>
        <Route exact path="/category/:id/:type">
          <SingleEventType />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
