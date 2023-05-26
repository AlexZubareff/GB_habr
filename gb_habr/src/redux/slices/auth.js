import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    const {data} = await axios.post('/auth/login', params);
    console.log(data);
    return data;
}); 

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const {data} = await axios.get('/auth/me');
    console.log(data);
    return data;
}); 


const initialState = {
        data: null,
        status: 'loading',

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logaut: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = 'loading';
            state.data = null
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload
        },
        [fetchAuth.rejected]: (state) => {
            state.status = 'error';
            state.data = null
        },

        [fetchAuthMe.pending]: (state) => {
            state.status = 'loading';
            state.data = null
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload
        },
        [fetchAuthMe.rejected]: (state) => {
            state.status = 'error';
            state.data = null
        },
    }
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const {logaut} = authSlice.actions;
