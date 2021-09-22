import React, {useEffect, useState} from 'react';
import {source} from '../data/bongoSound.json';

const DrumMachine = () => {
  const sounds = {
    Q: 'Q!',
    W: 'W!',
    E: 'E!',
    A: 'A!',
    S: 'S!',
    D: 'D!',
    Z: 'Z!',
    X: 'X!',
    C: 'C!',
  };
  const [drum, setDrum] = useState('');

  // const handleKeyUp = (e) => {
  //   const id = e.code[e.code.length-1];
  //   if (document.getElementById(id)) {
  //     const btn = document.getElementById(`button-${id}`);
  //     btn.style.backgroundColor = '#202020';
  //   }
  // };

  const playDrumSound = (drum) => { // handler for clicks and key presses
    if (sounds[drum]) {
      setDrum(drum);
      document.getElementById(`${drum}`).play();
    } else {
      return;
    }
  };

  useEffect(() => { // react useEffect registers handler above for key down
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      playDrumSound(e.key.toUpperCase());
    });
  }, []); // with empty array, side-effect runs only once after initial render

  const drums = Object.keys(sounds).map( (drum, i) =>
    <button
      onClick= {(e) => playDrumSound(e.target.value)}
      key={`${i}`}
      className="drum-pad"
      value={`${drum}`}
      id={`DRUM-${drum}`}
    >
      {drum}
      <audio src={source} className="clip" id={`${drum}`}/>
    </button>);

  return (
    <div id="drum-machine" className="drum-machine">
      <div className="title-bar">
        <i className="fas fa-drum">&nbsp;&nbsp;</i>
             BONGO MACHINE&nbsp;&nbsp;
        <i className="fas fa-drum"></i>
      </div>
      <div id="display" className="display">{sounds[drum]?sounds[drum]:''}</div>
      <div className="button-container">
        {drums}
      </div>
    </div>
  );
};

export default DrumMachine;

