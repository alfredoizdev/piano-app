import { useState } from "react";
import "./Play.scss";
import { useAppContext } from "context/AppContext";

export const Play = () => {

  const { keyLogs, updaterKeysCtx } = useAppContext();
  const [loading, setLoading] = useState(false);

  const handlePlayLogs = () => {
    updaterKeysCtx({
      selected: null,
    });
    setLoading(true);
    let count = 0;
    const intervalId = setInterval(() => {
      updaterKeysCtx({
        selected: keyLogs[count],
      });
      count++;

      if (count === keyLogs.length) {
        clearInterval(intervalId);
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      {keyLogs.length !== 0 && (
        <button disabled={loading} onClick={handlePlayLogs} className='play'>
          Play
        </button>
      )}
    </>
  );
};
