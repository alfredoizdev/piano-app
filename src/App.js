import { Play } from "components/form/Play";
import "./App.scss";
import Log from "./components/log/Log";
import { Piano } from "./components/piano/Piano";
import AppContexProvider from "./context/AppContext";

function App() {
  return (
    <div className='container'>
      <AppContexProvider>
        <Piano />
        <Log />
        <Play />
      </AppContexProvider>
    </div>
  );
}

export default App;
