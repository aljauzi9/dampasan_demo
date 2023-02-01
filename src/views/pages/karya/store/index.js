import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import interceptFetch from '../../../../config/axiosInstance';
import { CheckValueArray } from '../../../../utility';

export const getData = createAsyncThunk('hasilKarya/getData', async params => {
	const response = await interceptFetch.get(`/v1/public/blog/hasil_karya`, {
		params
	});
	console.log('hasilKarya response', { params, response });

	return {
		data: response.data.data.rows,
		total: response.data.data.count
	}
});

export const getDetail = createAsyncThunk('hasilKarya/getDetail', async blog_id => {
	const response = await interceptFetch.get(`/v1/public/${blog_id}/detailhasil`);
	console.log('hasilKarya detail response', { blog_id, response });

	return response.data.data;
});

export const getTags = createAsyncThunk('hasilKarya/getTags', async () => {
	const arrayValue = ['semua', 'karya guru', 'karya siswa'];
	let newItemsArr = [
		{
			"tag_id": null,
			"tag": 'Semua',
			"tag_kategori": 'hasil_karya',
			"updated_at": null,
			"deleted_at": null
		},
	];

	const response = await interceptFetch.get('/v1/public/tag', {
		params: { tag_kategori: 'hasil_karya' }
	});

	const checkResponse = CheckValueArray(response.data.data.rows);
	if (checkResponse) {
		const responseCategoryTags = response.data.data;
		responseCategoryTags.rows.map(item => newItemsArr.push(item));
		newItemsArr = newItemsArr.filter(e => arrayValue.includes((e.tag).toLowerCase()));
		console.log('hasilKarya category tags response', { response, newItemsArr });

		return {
			dataCategoryTags: newItemsArr,
			totalTags: responseCategoryTags.count
		}
	}

	return {
		dataCategoryTags: newItemsArr,
		totalTags: newItemsArr.length
	}
});

export const hasilKaryaSlice = createSlice({
	name: 'hasilKarya',
	initialState: {
		data: [],
		total: 0,
		dataCategoryTags: [],
		totalTags: 0,
		categoryBlogId: null,
		selectedBlog: {}
	},
	reducers: {
		categoryBlogId: (state, action) => {
			console.log({ state, action })

			state.categoryBlogId = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getData.fulfilled, (state, action) => {
				// console.groupCollapsed('hasilKarya extraReducers');
				// console.log({ state, action });
				// console.groupEnd();

				state.data = action.payload.data;
				state.total = action.payload.total;
			})
			.addCase(getDetail.fulfilled, (state, action) => {
				// console.groupCollapsed('hasilKarya detail extraReducers');
				// console.log({ state, action });
				// console.groupEnd();

				state.selectedBlog = action.payload;
			})
			.addCase(getTags.fulfilled, (state, action) => {
				// console.groupCollapsed('hasilKarya Category Tags extraReducers');
				// console.log({ state, action });
				// console.groupEnd();

				state.dataCategoryTags = action.payload.dataCategoryTags;
				state.totalTags = action.payload.totalTags;
			});
	}
});
export const { categoryBlogId } = hasilKaryaSlice.actions;

export default hasilKaryaSlice.reducer;