import React, {useEffect} from 'react';
import bongoSound from './bongoSound';

const DrumPad = () => {
  const btnIds = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  const handleClick = (e) => {
    const display = document.getElementById('display');
    const msgs = {
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
    const id = e.type === 'keydown' ?
        e.code[e.code.length-1] : e.target.id[e.target.id.length-1];
    display.innerHTML = msgs[id];
    const clip = document.getElementById(id);
    clip.play();
  };

  const handleKeyPress = (e) => {
    const id = e.code[e.code.length-1];
    if (document.getElementById(id)) {
      const btn = document.getElementById(`button-${id}`);
      btn.style.backgroundColor = 'orange';
      handleClick(e);
    }
  };

  const handleKeyUp = (e) => {
    const id = e.code[e.code.length-1];
    if (document.getElementById(id)) {
      const btn = document.getElementById(`button-${id}`);
      btn.style.backgroundColor = '#202020';
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keyup', handleKeyUp);
  });

  const buttons = btnIds.map( (button) =>
    <button
      onClick= {handleClick}
      key={`${button}`}
      className="drum-pad"
      id={`button-${button}`}
    >
      {button}
      <audio src={bongoSound} id={button} className="clip" />
    </button>);
  return (
    <div className="button-container">
      {buttons}
    </div>
  );
};

export default DrumPad;

