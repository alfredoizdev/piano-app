import "./Play.scss";
import { useAppContext } from "context/AppContext";

export const Play = () => {
  const { keyLogs, updaterKeysCtx } = useAppContext();

  const handlePlayLogs = () => {
    updaterKeysCtx({
      selected: null,
    });
    let count = 0;
    const intervalId = setInterval(() => {
      updaterKeysCtx({
        selected: keyLogs[count],
      });
      count++;

      if (count === keyLogs.length) {
        clearInterval(intervalId);
      }
    }, 1000);
  };

  return (
    <button onClick={handlePlayLogs} className='play'>
      Play
    </button>
  );
};
