import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = `https://api.unsplash.com/photos/random/`
const query = `sweden%20forest`
const orientation = `landscape`
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY

export const fetchImage = createAsyncThunk(
    'image/fetchImage',
    async () => {
        const response = await fetch(`${url}?query=${query}&orientation=${orientation}&client_id=${API_KEY}`)
        const json = await response.json()
        const data = {
            src: json.urls.raw,
            userName: json.user.name,
            link: json.user.links.html
        }
        return data
    }
)

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    src: '',
    userName: '',
    link: '',
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchImage.pending]: (state) => {
      state.isLoading = true
      state.error = false
    },
    [fetchImage.fulfilled]: (state, action) => {
      const { src, userName, link } = action.payload
      
      state.src = src
      state.userName = userName
      state.link = link
      state.isLoading = false
      state.error = false
    },
    [fetchImage.rejected]: (state) => {
      state.isLoading = false
      state.error = true
    },
  },
})

export const selectImage = (state) => state.image.src
export const selectUserName = (state) => state.image.userName
export const selectLink = (state) => state.image.link
export const selectError = (state) => state.image.error
export default imageSlice.reducer