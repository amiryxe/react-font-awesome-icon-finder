import "./App.css";
import { Home } from "./pages";
import MainState from "./context/MainState";

function App() {
  return (
    <MainState>
      <div className="App">
        <Home />
      </div>
    </MainState>
  );
}

export default App;
