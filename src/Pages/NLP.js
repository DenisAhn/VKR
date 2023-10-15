import React from 'react'
import NLPHome from '../components/NLPHome'
import NLPSlider from '../components/NLPSlider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Divider } from '@mui/material';

const NLP = () => {
  return (
    <div className='App'>
      <Navbar />
      <NLPHome />
      <NLPSlider className="slider"/>
      <Divider className='divider' />
      <Footer />
    </div>
  )
}

export default NLP