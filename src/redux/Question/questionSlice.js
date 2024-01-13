import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   activeQuestionId:0
}
const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setActiveQuestionId: (state, action) => {
      state.activeQuestionId = action.payload;
    },
   
  },
})
export const { setActiveQuestionId } = questionSlice.actions
export default questionSlice.reducer