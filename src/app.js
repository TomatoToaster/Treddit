import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>Hello</div>
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

ReactDOM.render(<App />, document.getElementById('app'))
