import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import interceptFetch from '../../../../config/axiosInstance';
import { CONSTANT } from '../../../../config/constantApi';

export const getData = createAsyncThunk('faq/getData', async () => {
  const response = await interceptFetch.get(CONSTANT.API_MANAGEMENT_FAQ);
	console.log('faq response', response);

	return {
    data: response.data.data.rows,
    total: response.data.data.count
  }
});

export const faqSlice = createSlice({
  name: 'faq',
  initialState: {
    data: [],
    total: 0,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
				// console.groupCollapsed('faq extraReducers');
				// console.log({ state, action });
				// console.groupEnd();

        state.data = action.payload.data;
				state.total = action.payload.total;
      });
  }
});

export default faqSlice.reducer;