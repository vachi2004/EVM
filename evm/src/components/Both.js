import React from 'react'
import Login from './Login'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import './Bring.css';
function Both() {
  return (
    <div>
        <Login></Login>
       <div className='sliding'>
       <ImageSlider slides={SliderData} />;
       </div>
    </div>
  )
}

export default Both