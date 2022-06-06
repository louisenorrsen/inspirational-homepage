import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_QUOTE_API_KEY,
  },
}

export const fetchQuote = createAsyncThunk(
    'quote/fetchQuote',
    async () => {
        const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options)
        const json = await response.json()
        const data = {
            quote: json.content,
            author: json.originator.name
        }
        return data
    }
)

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: '',
        author: '',
        isLoading: false,
        error: false
    },
    reducers: {},
    extraReducers: {
        [fetchQuote.pending]: (state) => {
            state.isLoading = true
            state.error = false
        },
        [fetchQuote.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = false
            const { quote, author } = action.payload
            state.quote = quote
            state.author = author
        },
        [fetchQuote.rejected]: (state) => {
            state.isLoading = false
            state.error = true
        }
    }
})

export const selectQuote = (state) => state.quote.quote
export const selectAuthor = (state) => state.quote.author
export default quoteSlice.reducer