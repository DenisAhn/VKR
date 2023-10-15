import React from 'react'
import Home from '../components/MainPageHome';
import SimpleSlider from '../components/MainPageSlider';
import Footer from "../components/Footer";
import { Divider } from '@mui/material';

const MainPage = () => {
  return (
    <div className='App'>
      <Home/>
      <SimpleSlider className="slider"/>
      <Divider className='divider' />
      <Footer />
    </div>
  )
}

export default MainPage