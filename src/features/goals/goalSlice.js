import { createSlice } from '@reduxjs/toolkit'

export const goalSlice = createSlice({
  name: 'goals',
  initialState: [],
  reducers: {
    addGoal: (state, action) => {
      const newGoal = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        color: action.payload.color,
      }
      state.push(newGoal)
    },
    completeGoal: (state, action) => {
      const index = state.findIndex((goal) => goal.id === action.payload.id)
      state[index].completed = action.payload.completed
      state[index].color = action.payload.color
    },
    deleteGoal: (state, action) => {
      return state.filter((goal) => goal.id !== action.payload.id)
    },
  },
})

export const selectGoals = (state) => state.goals
export const { addGoal, completeGoal, deleteGoal } = goalSlice.actions
export default goalSlice.reducer
