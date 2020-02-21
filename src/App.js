import React, { Component } from 'react';
import Slider from './components/Slider'
import './App.scss'

const profList = [
  {
    id: '1',
    dayWeek: 'mon',
    day: '12',
    availability: ['09:00', '10:30', '11:00', '13:50']
  },
  {
    id: '2',
    dayWeek: 'tue',
    day: '13',
    availability: ['09:00', '10:30', '11:00', '13:50']
  },
  {
    id: '3',
    dayWeek: 'wed',
    day: '14',
    availability: ['09:00', '10:30', '11:00', '13:50']
  },
  {
    id: '4',
    dayWeek: 'thu',
    day: '15',
    availability: ['09:00', '10:30', '11:00', '13:50']
  },
  {
    id: '5',
    dayWeek: 'fri',
    day: '16',
    availability: ['09:00', '10:30', '11:00', '13:50']
  },
  {
    id: '6',
    dayWeek: 'sat',
    day: '17',
    availability: ['09:00', '10:30', '11:00', '13:50']
  },
  {
    id: '7',
    dayWeek: 'sun',
    day: '18',
    availability: ['09:00', '10:30', '11:00', '13:50']
  }
]

class App extends Component {
  render() {
    return (
      <div className="app">
        <Slider>
          {profList.map(professor => (
            <Slider.Item professor={professor} key={professor.id} />
          ))}
        </Slider>
        
      </div>
    );
  }
}

export default App;
