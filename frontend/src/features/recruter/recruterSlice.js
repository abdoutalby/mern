import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recruterService from './recruterService'

const initialState = {
  recruters: [],
  recruterIsError: false,
  recruterIsSuccess: false,
  recrruterIsLoading: false,
  recruterMessage: '',
}

// Create new recruter
export const createRecruter = createAsyncThunk(
  'recruters/create',
  async (recruterData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await recruterService.createRecruter(recruterData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user goals
export const getRecruters = createAsyncThunk(
  'recruters/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await recruterService.getRecruters(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user goal
export const deleteRecruter = createAsyncThunk(
  'recruters/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await recruterService.deleteRecruter(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const recruterSlice = createSlice({
  name: 'recruters',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRecruter.pending, (state) => {
        state.recrruterIsLoading = true
      })
      .addCase(createRecruter.fulfilled, (state, action) => {
        state.recrruterIsLoading = false
        state.recruterIsSuccess = true
        state.recruters.push(action.payload)
      })
      .addCase(createRecruter.rejected, (state, action) => {
        state.recrruterIsLoading = false
        state.recruterIsError = true
        state.recruterMessage = action.payload
      })
      .addCase(getRecruters.pending, (state) => {
        state.recrruterIsLoading = true
      })
      .addCase(getRecruters.fulfilled, (state, action) => {
        state.recrruterIsLoading = false
        state.recruterIsSuccess = true
        state.recruters = action.payload
      })
      .addCase(getRecruters.rejected, (state, action) => {
        state.recrruterIsLoading = false
        state.recruterIsError = true
        state.recruterMessage = action.payload
      })
      .addCase(deleteRecruter.pending, (state) => {
        state.recrruterIsLoading = true
      })
      .addCase(deleteRecruter.fulfilled, (state, action) => {
        state.recrruterIsLoading = false
        state.recruterIsSuccess = true
        state.recruters = state.recruters.filter(
          (recruter) => recruter._id !== action.payload.id
        )
      })
      .addCase(deleteRecruter.rejected, (state, action) => {
        state.recrruterIsLoading = false
        state.recruterIsError = true
        state.recruterMessage = action.payload
      })
  },
})

export const { resetRecruter } = recruterSlice.actions
export default recruterSlice.reducer
