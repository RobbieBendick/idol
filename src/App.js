import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Classic from "./Components/Classic/Classic";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/classic" component={Classic}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
