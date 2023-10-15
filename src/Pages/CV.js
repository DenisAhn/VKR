import React from 'react'
import CVHome from '../components/CVHome'
import CVSlider from '../components/CVSlider'
import Footer from '../components/Footer'
import { Divider } from '@mui/material';
import Navbar from '../components/Navbar';

const CV = () => {
  return (
    <div className='App'>
      <Navbar />
      <CVHome />
      <CVSlider className="slider"/>
      <Divider className='divider' />
      <Footer />
    </div>
  )
}

export default CV