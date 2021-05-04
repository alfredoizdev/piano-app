import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [key, setKey] = useState("");

  const [highlight, setHighlight] = useState("");
  const [currentKey, setCurrentKey] = useState("");

  const renderKey = () =>
    currentKey ? <p>{currentKey}</p> : <p>Need press a key</p>;

  useEffect(() => {
    if (key) {
      setCurrentKey(key);
      setHighlight(`${key.toLowerCase()}h`);
      setTimeout(() => {
        setHighlight("");
      }, 1000);
    }
  }, [key]);

  return (
    <div className='container'>
      <button onClick={() => setKey("C")} className={`c-note ${highlight}`}>
        C
      </button>
      <button onClick={() => setKey("D")} className={`d-note ${highlight}`}>
        D
      </button>
      <button onClick={() => setKey("E")} className={`e-note ${highlight}`}>
        E
      </button>
      <button className='cs-note'></button>
      <button className='ds-note'></button>
      <button onClick={() => setKey("F")} className={`f-note ${highlight}`}>
        F
      </button>
      <button onClick={() => setKey("G")} className={`g-note ${highlight}`}>
        G
      </button>
      <button className='es-note'></button>
      <button onClick={() => setKey("A")} className={`a-note ${highlight}`}>
        A
      </button>
      <button onClick={() => setKey("B")} className={`b-note ${highlight}`}>
        B
      </button>
      <button className='as-note'></button>
      <button className='bs-note'></button>
      <div className='log'> {renderKey()}</div>
    </div>
  );
}

export default App;
