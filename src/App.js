import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchImage, selectImage, selectError } from './features/image/imageSlice';
import { Weather } from './features/weather/Weather'
import { ImageDetails } from './features/image/ImageDetails'
import { Quote } from './features/quote/Quote'

function App() {
  const srcUrl = useSelector(selectImage)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchImage())    
  }, [dispatch]) 

  useEffect(() => {
    if (error) {
      document.body.style.backgroundImage = `url(./assets/joshua-reddekopp--3uIUqsR-Rw-unsplash.jpg)`
    } else {
      document.body.style.backgroundImage = `url(${srcUrl})`
    }
  }, [error, srcUrl])

  return (
    <div className="app">
      <Weather />
      <Quote /> 
      <ImageDetails />
    </div>
  );
}

export default App;
