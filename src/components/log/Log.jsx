import React from "react";
import { useAppContext } from "context/AppContext";
import "./Log.scss";

const Log = () => {
  const { keyLogs } = useAppContext();

  return (
    <>
      {keyLogs.length !== 0 && (
        <div className='log'>
          <div className='log-container'>
            {keyLogs.map((key, index) => (
              <p key={index}>{key}</p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Log;
