import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import interceptFetch from '../../../../config/axiosInstance';
import { CONSTANT } from '../../../../config/constantApi';

export const getData = createAsyncThunk('termsCond/getData', async () => {
  const response = await interceptFetch.get(CONSTANT.API_MANAGEMENT_TERMSCONDITIONS);
	// console.log('termsCond response', response);

	return {
    data: response.data.data.rows,
    total: response.data.data.count
  }
});

export const termsCondSlice = createSlice({
  name: 'termsCond',
  initialState: {
    data: [],
    total: 0,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
				// console.groupCollapsed('termsCond extraReducers');
				// console.log({ state, action });
				// console.groupEnd();

        state.data = action.payload.data[0];
				state.total = action.payload.total;
      });
  }
});

export default termsCondSlice.reducer;