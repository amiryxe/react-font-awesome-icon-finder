import "./App.css";
import { Home } from "./pages";
import MenuBar from "./components/MenuBar";
import MainState from "./context/MainState";

function App() {
  return (
    <MainState>
      <div className="App">
        <MenuBar />
        <Home />
      </div>
    </MainState>
  );
}

export default App;
