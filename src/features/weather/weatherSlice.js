import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";   

const url = 'https://api.openweathermap.org/data/2.5/weather?'
const lat = '57.1667'
const lon = '16.45'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async () => {
        const response = await fetch(`${url}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        const json = await response.json()
        const data = {
            location: json.name,
            temp: json.main.temp,
            description: json.weather[0].description,
            icon: json.weather[0].icon
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
            const { location, temp, description, icon } = action.payload
            state.location = location
            state.temp = temp
            state.description = description
            state.icon = icon
            state.isLoading = false
            state.error = false
        },
        [fetchWeather.rejected]: (state) => {
            state.isLoading = false
            state.error = true
        }
    }
})

export const selectLocation = (state) => state.weather.location
export const selectTemp = (state) => state.weather.temp
export const selectDescription = (state) => state.weather.description
export const selectIcon = (state) => state.weather.icon
export default weatherSlice.reducer