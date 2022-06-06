import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchImage, selectImages, selectCurrentImageIndex } from './features/image/imageSlice';
import { Weather } from './features/weather/Weather'
import { ImageDetails } from './features/image/ImageDetails'
import { Quote } from './features/quote/Quote'
import { Goals } from './features/goals/Goals'

function App() {
  const dispatch = useDispatch()
  const images = useSelector(selectImages)
  const currentImageIndex = useSelector(selectCurrentImageIndex)
  const currentBackground = images[currentImageIndex].src
  

  // useEffect(() => {
  //   dispatch(fetchImage())
  // }, [dispatch])

 

  return (
    <div className='app'>
      <div className='backgroundImageContainer'>
        <img src={currentBackground} alt='' className='backgroundImage'/>
      </div>
      
      <Weather />
      <Goals />
      <Quote />
      <ImageDetails />
    </div>
  )
}

export default App;
