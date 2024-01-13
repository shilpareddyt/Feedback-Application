import { createSlice } from '@reduxjs/toolkit'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
const initialState = {
    options:[{ id: 0, icon: <ThumbUpAltIcon fontSize='large' />, label: 'Good' },
{ id: 1, icon: <SentimentNeutralIcon fontSize='large' />, label: 'Not Sure' },
{ id: 2, icon: <ThumbDownIcon fontSize='large' />, label: 'Unlike' },
],
}
const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
   
  },
})

export default optionSlice.reducer