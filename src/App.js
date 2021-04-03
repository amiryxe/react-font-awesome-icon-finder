import "./App.css";
import { Home, About } from "./pages";
import MenuBar from "./components/MenuBar";
import MainState from "./context/MainState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <MainState>
      <Router>
        <div className="App">
          <MenuBar />
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>
        </div>
      </Router>
    </MainState>
  );
}

export default App;
