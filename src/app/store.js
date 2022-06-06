import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/image/imageSlice'
import weatherReducer from '../features/weather/weatherSlice'
import quoteReducer from '../features/quote/quoteSlice'
import goalsReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    image: imageReducer,
    weather: weatherReducer,
    quote: quoteReducer,
    goals: goalsReducer
  },
});
