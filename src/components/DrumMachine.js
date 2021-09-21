import React, {useEffect, useState} from 'react';
import bongoSound from './bongoSound';

const DrumMachine = () => {
  const sounds = {
    Q: 'BOOM!',
    W: 'BAM!',
    E: 'CONGA!',
    A: 'BONGO!',
    S: 'BIM!',
    D: 'BOP!',
    Z: 'BEEP!',
    X: 'BANG!',
    C: 'BAP!',
  };
  const [drum, setDrumHit] = useState('');

  const handleDrumHit = (drum) => {
    if (sounds[drum]) {
      setDrumHit(drum);
      document.getElementById(`${drum}`).play();
    } else {
      return;
    }
  };

  // const handleKeyUp = (e) => {
  //   const id = e.code[e.code.length-1];
  //   if (document.getElementById(id)) {
  //     const btn = document.getElementById(`button-${id}`);
  //     btn.style.backgroundColor = '#202020';
  //   }
  // };

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      handleDrumHit(e.key.toUpperCase());
    });
  });

  const buttons = Object.keys(sounds).map( (button) =>
    <button
      onClick= {(e) => handleDrumHit(e.target.value)}
      key={`${button}`}
      className="drum-pad"
      value={`${button}`}
      id={`DRUM-${button}`}
    >
      {button}
      <audio src={bongoSound} className="clip" id={`${button}`}/>
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
        {buttons}
      </div>
    </div>
  );
};

export default DrumMachine;

