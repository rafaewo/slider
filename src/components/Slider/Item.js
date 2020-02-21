import React from 'react';
import SliderContext from './context'
import './Item.scss'

const Item = ({ professor }) => (
  <SliderContext.Consumer>
    {({ elementRef }) => {
      const openAvailability = () => {
        console.log('abrir')
      }

      return (
        <div ref={elementRef}>
          <div onClick={openAvailability} className='card'>
            <h1>{professor.dayWeek}</h1>
            <p>{professor.day}</p>
          </div>

        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;


