import React from 'react';
import DrumPad from './DrumPad';
import Display from './Display';

const DrumMachine = () => {
  return (
    <div id="drum-machine" className="drum-machine">
      <div className="title-bar">
        <i className="fas fa-drum">&nbsp;&nbsp;</i>
               BONGO MACHINE&nbsp;&nbsp;
        <i className="fas fa-drum"></i>
      </div>
      <Display />
      <DrumPad />
    </div>);
};

export default DrumMachine;

