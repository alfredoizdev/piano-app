import React from "react";
import { useAppContext } from "context/AppContext";
import PianoKey from "./PianoKey";
import "./Piano.scss";

export const Piano = () => {
  const { keys } = useAppContext();

  return (
    <div style={{position: 'relative'}}>
      {keys.map((key, index) => (
        <PianoKey key={index} k={key} />
      ))}
      <button className='cs-note'></button>
      <button className='ds-note'></button>
      <button className='es-note'></button>
      <button className='as-note'></button>
      <button className='bs-note'></button>
    </div>
  );
};
