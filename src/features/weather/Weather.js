import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Weather.module.css'
import {
  selectLocation,
  selectTemp,
  selectDescription,
  selectIcon,
  fetchWeather,
  getCoords,
  selectLat,
  selectLon,
  selectCountry
} from './weatherSlice'

export const Weather = () => {
  const location = useSelector(selectLocation)
  const country = useSelector(selectCountry)
  const temp = Math.round(useSelector(selectTemp))
  const description = useSelector(selectDescription)
  const icon = useSelector(selectIcon)
  const lat = useSelector(selectLat)
  const lon = useSelector(selectLon)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCoords())
    dispatch(fetchWeather({lat, lon}))
    
  }, [dispatch, lat, lon])

  return (
    <div className={style.weatherContainer}>
      <h2>{`${location}, ${country}`}</h2>
      <div className={style.weatherDetails}>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className={style.weatherIcon}
        />
        <h1>{temp}&deg;C</h1>
      </div>

      <p className={style.description}>
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </p>
    </div>
  )
}
