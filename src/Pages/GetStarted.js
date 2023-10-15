import React from 'react'
import SimpleSlider from '../components/MainPageSlider';
import GetStartedHome from "../components/GetStartedHome";
import GetStartedSlider from "../components/GetStartedSlider";
import Footer from "../components/Footer";
import { Divider } from '@mui/material';


const GetStarted = () => {
  return (
    <div className='App'>
      <GetStartedHome />
      <GetStartedSlider className="slider"/>
      <Divider className='divider' />
      <Footer />
    </div>

  )
}

export default GetStarted