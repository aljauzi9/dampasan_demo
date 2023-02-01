import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import interceptFetch from '../../../../config/axiosInstance';
import CONSTANT from '../../../../config/constantApi';

export const getDataVideoInspirasi = createAsyncThunk('videoInspirasi/getData', async () => {
	const response = await interceptFetch.get(CONSTANT.API_MANAGEMENT_ABOUT);
	console.log('VideoInspirasi response', response);

	return response.data.data;
});

export const getDataParenting = createAsyncThunk('parenting/getData', async () => {
	const response = await interceptFetch.get(`/v1/public/blog/parenting`, {
		params: { is_pinned: 1 }
	});
	console.log('getDataParenting response', response);

	return response.data.data.rows;
});

export const getDataHasilKarya = createAsyncThunk('hasilKarya/getData', async () => {
	const response = await interceptFetch.get(`/v1/public/blog/hasil_karya`, {
		params: { is_pinned: 1 }
	});
	console.log('getDataHasilKarya', response);

	return response.data.data.rows;
});

export const mainSlice = createSlice({
	name: 'aboutMain',
	initialState: {
		dataVideo: {},
		dataParenting: [],
		dataHasilKarya: []
	},
	reducers: {

	},
	extraReducers: builder => {
		builder
			.addCase(getDataVideoInspirasi.fulfilled, (state, action) => {
				// console.groupCollapsed('getDataVideoInspirasi extraReducers');
				// console.log({ state, action });
				// console.groupEnd();

				state.dataVideo = action.payload;
			})
			.addCase(getDataParenting.fulfilled, (state, action) => {
				// console.groupCollapsed('getDataParenting extraReducers');
				// console.log({ state, action });
				// console.groupEnd();

				state.dataParenting = action.payload;
			})
			.addCase(getDataHasilKarya.fulfilled, (state, action) => {
				// console.groupCollapsed('getDataHasilKarya extraReducers');
				// console.log({ state, action });
				// console.groupEnd();

				state.dataHasilKarya = action.payload;
			})
	}
});

export default mainSlice.reducer;