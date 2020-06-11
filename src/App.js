import React from 'react';
import {Global} from './components/Styled'
import Pads from './components/Pads';
import {KEYS} from './constants';

export const initialState = {
  display: '',
  lastPlayed: ''
};

function App() {
  const [s, setS] = React.useState(initialState);

  const playById = (keyTrigger, id) => {
    const aud = document.getElementById(keyTrigger);
    aud.currentTime = 0;
    aud.play();
    setS({
      ...s,
      display: id,
      lastPlayed: id
    });
  }

  const keyDownHandler = e => {
    const  selected= KEYS.filter(k => e.keyCode === k.keyCode);
    if (selected.length > 0) {
      playById(selected[0].keyTrigger, selected[0].id);
    }
  }

  React.useEffect(() => {
    setTimeout(() => setS({
      ...s,
      lastPlayed: ''
    }), 100)
  }, [s.lastPlayed]);

  React.useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }
  }, []);

  return (
    <main className="App" id="drum-machine">
      <Global />
      <Pads {...s} onPadClick={playById} />
    </main>
  );
}

export default App;
