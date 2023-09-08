import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout my amazing work in Graphics Design!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Illustrations mde using Adobe Illustrator'
              label='Graphics'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Lineart'
              label='Minimal'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Metallic Design'
              label='3D'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Flat vector illustration'
              label='Flat vector'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Mock-up of products made using Adobe Photoshop'
              label='Product Design'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;