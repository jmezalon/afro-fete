import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Landing from "./components/Landing";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Singup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr
        style={{
          height: "1px",
          "background-color": "rgb(201 199 199)",
          border: "none",
          width: "100%",
          marginBottom: "5%",
        }}
      />
      <Switch>
        <Route exact path="/auth/signup">
          <Singup />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
