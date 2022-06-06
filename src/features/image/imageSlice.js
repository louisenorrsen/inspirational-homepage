import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const url = `https://api.unsplash.com/photos/random/`
const query = `sweden%20forest`
const orientation = `landscape`
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY

export const fetchImage = createAsyncThunk('image/fetchImage', async () => {
  const response = await fetch(
    `${url}?query=${query}&orientation=${orientation}&count=5&client_id=${API_KEY}`
  )
  const json = await response.json()
  return json
})

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    images: [
      {
        id: '',
        src: '',
        userName: '',
        link: '',
      },
    ],
    currentImageIndex: 0,
    isLoading: false,
    error: false,
  },
  reducers: {
    nextImage: (state, action) => {
      const maxIndex = state.images.length -1
      if (state.currentImageIndex === maxIndex) {
        state.currentImageIndex = 1
      } else {
        state.currentImageIndex += 1
      }       
    },
    prevImage: (state, action) => {
      const maxIndex = state.images.length-1
      if (state.currentImageIndex === 1) {
        state.currentImageIndex = maxIndex
      } else {
        state.currentImageIndex -= 1
      }
    }
  },
  extraReducers: {
    [fetchImage.pending]: (state) => {
      state.isLoading = true
      state.error = false
    },
    [fetchImage.fulfilled]: (state, action) => {
      action.payload.forEach((image) => {
        const picture = {
          id: image.id,
          src: image.urls.raw,
          userName: image.user.name,
          link: image.user.links.html,
        }
        state.images.push(picture)
      })
      state.currentImageIndex = 1
      state.isLoading = false
      state.error = false
    },
    [fetchImage.rejected]: (state) => {
      state.isLoading = false
      state.error = true
    },
  },
})

export const selectCurrentImageIndex = (state) => state.image.currentImageIndex
export const selectImages = (state) => state.image.images
export const selectError = (state) => state.image.error
export const { nextImage, prevImage } = imageSlice.actions
export default imageSlice.reducer
