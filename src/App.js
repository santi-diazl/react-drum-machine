import './App.css';
import React from 'react';

const srcs = ["data:audio/mpeg;base64,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1tSnrsZFnmiMu06fll1fk9Eo3I5fVyTKFmKexulSF2xTxYtVeHcwMKVmGwkcGDAyHMoORyNvgoQg5vtQupfVH98EXpU4QDT8XjTLwPu+bgr9wCbP15ztT/GfT3pDj678YXweQ6qQJxeE9ga62tns0E5At//7UsTbAAmIdR7HoHCBGZAj6PSNmKJpCllir5isDC0G6OVo65ENG0tVleD9Wk7toTTEoDEeG8KhAJsSgiMiMiSHDwSQrJsSA2JaLLb6mF0KvUwqpiIzYE01h0nZosZXWOc5dvWlspjbDhUwlWAFgUD9Pl2Y47AG2QZ9dsH2Sk9bxtYvBwL9uWnLTRxy3kQhSgUTAIgpdGc9SbTIVqQ1L83Y4GYox2mTLG3zU/r+pd8iIOfUWiP/qj7Ed/F9XoKfhj9HoBSEq/YM/r74sfeQmq6h//tSxO+DTDx/FCewzIFvDiKFhI2im6rVJFQCLDRKuPBzEWav0Ao2z6a2Le9W+G5FwtYhHoP7OdzNY5G/D4C8iR0NT16D0UE5rr8hsRWc8ramvY8xWp17wFpLd8/9mUppmcfKGcvd5v+SHmr+YPO/w71v6WaL8x4oAio0QSCDV8xWtHMKIJaL7GAOiZT9UrUqgmjUhRVIRyiwxNCEWoB0JIWGTXMzzTyvUJH2sJUivSdepp1rvM+VcElPWtN+SuAPnHRZUswloaMJC0rDZDqLqeD/+1LE7oNMwGMSDDxpCVYQIsj2DSAmxRFqJqVRrkJO5VstAqBItGn2Bk1VnK50mokNBVRa+pLlN/4ymkm0SWS35TCirCUot9t0opiv1esVSym/3+yu/7paIiWUGld/3YSyoqUUxWSxv//cpjhpINK1TEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UsTug0w4VRInsQxJmLUiAPSNMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tSxOiCCexdGOYMzQGQDB8A8w3JVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="];

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    }
  
 componentDidMount() {
      document.addEventListener("keydown",this.handleKeyPress);
      document.addEventListener("keyup",this.handleKeyUp);
  }
  
  handleClick(e){
    let display = document.getElementById("display");
    const strings = {
      Q: "BOOM!",
      W: "BAM!",
      E: "CONGA!",
      A: "BONGO!",
      S: "BIM!",
      D: "BOP!",
      Z: "BEEP!",
      X: "BANG!",
      C: "BAP!"
    };
    let id = e.type==="keydown" ? e.code[e.code.length-1] : e.target.id[e.target.id.length-1];
    display.innerHTML = strings[id];
    let clip = document.getElementById(id);
    clip.play();
  }
  
  handleKeyPress(e){
    let id = e.code[e.code.length-1];
    if (document.getElementById(id)){
       let btn = document.getElementById(`button-${id}`);
       btn.style.backgroundColor = "orange";
       this.handleClick(e);
    }
  }
  
  handleKeyUp(e){
    let id = e.code[e.code.length-1];
    if (document.getElementById(id)){
       let btn = document.getElementById(`button-${id}`);
       btn.style.backgroundColor = "#202020";
    }
  }
  
  render () {
    const buttons = ["Q","W","E","A","S","D","Z","X","C"];
    const renderButtons = buttons.map( button => <button onClick={this.handleClick} className="drum-pad" id={`button-${button}`}>{button}<audio src={srcs[0]} id={button} className="clip"></audio></button>);
    return (
      <div className="button-container">
         {renderButtons}                       
      </div>
    )
  };
};

class DrumMachine extends React.Component {
  render () {
    return (
    <div id="drum-machine" className="drum-machine">
        <div className="title-bar">
          <i className="fas fa-drum">&nbsp;&nbsp;</i>
             SANTI'S BONGOS&nbsp;&nbsp;
          <i className="fas fa-drum"></i>
        </div>
        <Display />
        <DrumPad />
    </div>);
  };
};

class Display extends React.Component {
  render () {
    return (
    <div id="display" className="display">      
    </div>);
  };
};

class App extends React.Component {
  render () {
    return (
    <div className="app">
        <DrumMachine />
    </div>);
  };
};
// ========================================


export default App;
