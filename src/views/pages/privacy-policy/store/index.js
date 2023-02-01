import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import interceptFetch from '../../../../config/axiosInstance';
import CONSTANT from '../../../../config/constantApi';

export const getData = createAsyncThunk('privacy/getData', async () => {
	const response = await interceptFetch.get(CONSTANT.API_MANAGEMENT_PRIVACYPOLICY);
	console.log('privacyPolicy response', response);

	return {
		data: response.data.data.rows,
		total: response.data.data.count
	}
});

export const privacyPolicySlice = createSlice({
	name: 'privacyPolicy',
	initialState: {
		data: [],
		total: 0
	},
	reducers: {

	},
	extraReducers: builder => {
		builder
			.addCase(getData.fulfilled, (state, action) => {
				// console.groupCollapsed('privacyPolicy extraReducers');
				// console.log({ state, action });
				// console.groupEnd();

				state.data = action.payload.data[0];
				state.total = action.payload.total;
			});
	}
});

export default privacyPolicySlice.reducer;