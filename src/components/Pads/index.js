import React from 'react';
import StyledPads from './StyledPads';
import {KEYS} from '../../constants';
import Pad from '../Pad';

export default function Pads({display, onPadClick, lastPlayed}) {
  return(
    <StyledPads>
      {KEYS.map(k => <Pad key={k.id} {...k} active={lastPlayed === k.id} onClick={onPadClick} />)}
      <div id="display" className="display">{display}</div>
    </StyledPads>
  )
}
