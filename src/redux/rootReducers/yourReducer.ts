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
    yourActionSuccess: (state, action) => {
      state.status = action.payload.status
    },
  },
})

export default yourReducerSlice.reducer
export const { yourAction, yourActionSuccess } = yourReducerSlice.actions
