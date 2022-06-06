import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getCoords = createAsyncThunk(
    'weather/fetchCoords',
    async () => {
        const response = await fetch(
          `https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.REACT_APP_LOCATION_API_KEY}`
        )
        const json = await response.json()
        const data = {
            lat: json.location.latitude,
            lon: json.location.longitude
        }
        return data
    }
)

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (coords) => {
        const { lat, lon } = coords
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        )
        const json = await response.json()
        const data = {
            location: json.name,
            temp: json.main.temp,
            description: json.weather[0].description,
            icon: json.weather[0].icon,
            country: json.sys.country
        }
        return data
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        location: '',
        temp: '',
        description: '',
        icon: '',
        lat: '',
        lon: '',
        country: '',
        isLoading: false,
        error: false
    },
    reducers: {},
    extraReducers: {
        [fetchWeather.pending]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [fetchWeather.fulfilled]: (state, action) => {
            const { location, temp, description, icon, country } = action.payload
            state.location = location
            state.country = country
            state.temp = temp
            state.description = description
            state.icon = icon
            state.isLoading = false
            state.error = false
        },
        [fetchWeather.rejected]: (state) => {
            state.isLoading = false
            state.error = true
        },
        [getCoords.pending]: (state, action) => {
            state.isLoading = true
            state.error = false
        },
        [getCoords.fulfilled]: (state, action) => {
            const { lat, lon } = action.payload
            state.isLoading = false
            state.error = false
            state.lat = lat
            state.lon = lon
        },
        [getCoords.rejected]: (state, action) => {
            state.error = true
            state.isLoading = false
        }
    }
})

export const selectLon = (state) => state.weather.lon
export const selectLat = (state) => state.weather.lat
export const selectLocation = (state) => state.weather.location
export const selectCountry = (state) => state.weather.country
export const selectTemp = (state) => state.weather.temp
export const selectDescription = (state) => state.weather.description
export const selectIcon = (state) => state.weather.icon
export default weatherSlice.reducer