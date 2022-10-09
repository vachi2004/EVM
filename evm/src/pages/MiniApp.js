import React from 'react'
import SideBar from '../components/SideBar';
import Chat from './Chat';
import Nav from './Nav';
import NavBar from './Navbar';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import '../components/Bring.css';
function MiniApp() {
  return (
    <div>
     <NavBar style={{position: 'fixed'}}/><Nav style={{position: 'fixed'}}/><SideBar style={{position: 'fixed'}}/>
     <div className='sliding'>
      <div className='imageslide'>
        <center>
       <ImageSlider slides={SliderData} />;
       </center>
       </div>
       </div>
     <Chat/>
    </div>
  )
}

export default MiniApp