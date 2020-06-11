import React from 'react';
import StyledPad from './StyledPad';

export default function Pad({
  keyTrigger,
  id, url, active,
  onClick
}) {
  const play = e => {
    onClick(e.target.textContent, id);
  }
  return (
    <StyledPad id={id} active={active} className="drum-pad" onClick={play}>
      {keyTrigger}
      <audio className="clip" preload="auto" src={url} id={keyTrigger} />
    </StyledPad>
  )
}
