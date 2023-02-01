import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import interceptFetch from '../../../../config/axiosInstance';
import { CONSTANT } from '../../../../config/constantApi';

export const getData = createAsyncThunk('about/getData', async () => {
	const response = await interceptFetch.get(CONSTANT.API_MANAGEMENT_ABOUT);
	return response.data.data;
});

export const aboutSlice = createSlice({
	name: 'about',
	initialState: {
		data: {}
	},
	reducers: {

	},
	extraReducers: builder => {
		builder
			.addCase(getData.fulfilled, (state, action) => {
				state.data = action.payload
			});
	}
});

export default aboutSlice.reducer;