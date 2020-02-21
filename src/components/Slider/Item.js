import React from 'react';
import SliderContext from './context'
import './Item.scss'

const Item = ({ professor }) => (
  <SliderContext.Consumer>
    {({ elementRef }) => {

      return (
        <div ref={elementRef}>
          <div className='card'>
            <h1>{professor.dayWeek}</h1>
            <p>{professor.day}</p>
          </div>

        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;


