import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';
import Logo from './components/Logo/logo';

class App extends Component {
  render() {
    return (
      <Logo />
    );
  }
}
// import anime from 'animejs';
//
//
// anime({
//   targets: document.getElementById('hello-text'),
//   translateX: [
//     { value: 100, duration: 1200 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 2000,
//   loop: true
// });

ReactDOM.render(<App />, document.getElementById('app'));
Logo.triggerAnimation();
anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay(el, i) { return i * 250; },
  direction: 'alternate',
  loop: true,
});
