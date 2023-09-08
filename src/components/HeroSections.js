import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSections() {
  return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1>CREATIVITY AWAITS</h1>
      <p>Scroll down to have a look at my Graphics Design work.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSections;