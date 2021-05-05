import React from "react";
import { useAppContext } from "context/AppContext";
import classNames from "classnames";
import "./Log.scss";

const Log = () => {
  const { keyLogs, selected } = useAppContext();

  return (
    <>
      {keyLogs.length !== 0 && (
        <div className='log'>
          <div className='log-container'>
            {keyLogs.map((key, index) => (
              <p
                className={classNames({
                  activetext: selected === key,
                })}
                key={index}
              >
                {key},{" "}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Log;
