import React, { Component } from 'react';
import anime from 'animejs';
import './logo.scss';

const logoViewBox = '0 0 700 100';
const letterColors = {
  capitalT: '#6F146D',
  r: '#6F146D',
  e: '#6F146D',
};
/**
 * A component to hold the animated logo for the website so that users can be
 * wowed as soon as they land.
 * Huge amounts of help/influence from Julian Garnier's anime js logo animation
 * @extends Component
 */
class Logo extends Component {
  static triggerAnimation() {
    console.log('ran');
    const timeline = anime.timeline();
    timeline.add({
      targets: '.letter-cap-t',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 2000,
      offset: 0,
    });
    timeline.add({
      targets: '.letter-r',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 2000,
      offset: 250,
    });
    timeline.add({
      targets: '.letter-e',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 2000,
      offset: 500,
    });
  }

  render() {
    return (
      <div className="logo-container">
        <div className="letters">
          <svg width="100%" height="100%" viewBox={logoViewBox}>
            <g fill="none" strokeWidth="15">
              <path
                className="letter-cap-t"
                stroke={letterColors.capitalT}
                d="M0,20 H100 L50,20 V100"
              />
              <path
                className="letter-r"
                stroke={letterColors.r}
                d="M100,100 V50 L100,60 Q125,40 145,60"
              />
              <path
                className="letter-e"
                stroke={letterColors.e}
                d="M81 101h60V81c-1-33.14-26.86-60-60-60a60 60 0 1 0 0 120 h50"
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default Logo;
