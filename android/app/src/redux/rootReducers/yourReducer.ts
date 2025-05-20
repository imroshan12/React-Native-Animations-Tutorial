import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
}

export const yourReducerSlice = createSlice({
  name: 'yourReducer',
  initialState,
  reducers: {
    yourAction: (state, action) => {
      // Handle your action here
      state.status = 'loading'
    },
  },
})

export default yourReducerSlice.reducer
export const { yourAction } = yourReducerSlice.actions
