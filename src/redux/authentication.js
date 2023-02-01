import { createSlice } from '@reduxjs/toolkit';

const initialUser = () => {
  const user = window.localStorage.getItem('userData');

  return user ? JSON.parse(user) : {}
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: initialUser()
  },
  reducers: {

	},
	extraReducers: {

	}
});

export default authSlice.reducer;