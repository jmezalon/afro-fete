import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Landing from "./components/Landing";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
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
