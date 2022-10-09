import React from 'react'
import Signup from './Signup'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import './Bring.css';
function Two() {
  return (
    <div>
        <Signup></Signup>
       <div className='sliding'>
       <ImageSlider slides={SliderData} />;
       </div>
    </div>
  )
}

export default Two