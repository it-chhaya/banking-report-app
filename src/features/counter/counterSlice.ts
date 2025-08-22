import { RootState } from "@/lib/store"
import { createSlice } from "@reduxjs/toolkit"


// Step 1: Initialize State
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
}

// Step 2: Define action and reducer
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  },
})

// Step 3: Export action and reducer
export const { increment } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer