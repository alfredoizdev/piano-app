import React from "react";
import "./Piano.scss";
import { useAppContext } from "context/AppContext";
import PropTypes from 'prop-types';
import classNames from "classnames";

const PianoKey = ({ k }) => {
  const { keyLogs, selected, updaterKeysCtx } = useAppContext();

  const handleClick = (k) => {
    updaterKeysCtx({
      selected: k,
      keyLogs: [...keyLogs, k],
    });
  };

  return (
    <button
      onClick={() => handleClick(k)}
      className={classNames(`${k.toLowerCase()}-note`, {
        active: selected === k,
      })}
    >
      {k}
    </button>
  );
};

PianoKey.propTypes = {
  k: PropTypes.string.isRequired
};

export default PianoKey;
