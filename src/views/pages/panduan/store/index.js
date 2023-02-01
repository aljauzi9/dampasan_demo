import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import interceptFetch from '../../../../config/axiosInstance';

export const getData = createAsyncThunk('panduan/getData', async () => {
	const response = await interceptFetch.get(`/v1/public/panduan`);

	return {
		data: response.data.data.rows,
		total: response.data.data.count
	}
});

export const getDataDetail = createAsyncThunk('panduan/getDataDetail', async params => {
	const response = await interceptFetch.get(`/v1/public/detail/${params}`);
	console.log('Params : ', params)
	console.log('Detail panduan : ', response)
	return {
		data: response.data.data.rows
	}
});

export const getDataPanduanDetail = createAsyncThunk('panduan/getDataPanduanDetail', async params => {
	console.log('params detail : ', params)
	const response = await interceptFetch.get(`/v1/public/detail-panduan/${params.panduan_id}?kategori_panduan=${params.kategori}`);
	return {
		data: response.data.data.rows,
		detail: response.data.data.panduan
	}
});

export const panduanSlice = createSlice({
	name: 'panduan',
	initialState: {
		data: [],
		selectedData: [],
		panduanDetail: [],
		total: 0
	},
	reducers: {

	},
	extraReducers: builder => {
		builder
			.addCase(getData.fulfilled, (state, action) => {
				state.data = action.payload.data;
				state.total = action.payload.total;
			})
			.addCase(getDataDetail.fulfilled, (state, action) => {
				state.selectedData = action.payload.data;
			})
			.addCase(getDataPanduanDetail.fulfilled, (state, action) => {
				state.panduanDetail = action.payload.data;
				state.selectedData = action.payload.detail;
			})
	}
});

export default panduanSlice.reducer;