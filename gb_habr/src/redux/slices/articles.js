import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    const {data} = await axios.get('/posts');
    console.log(data);
    return data;
}); 

const initialState = {
    articles: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading',
    }

};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchArticles.pending]: (state) => {
            state.articles.items = [];
            state.articles.status = 'loading'
        },
        [fetchArticles.fulfilled]: (state, action) => {
            state.articles.items = action.payload;
            state.articles.status = 'loaded';
        },
        [fetchArticles.rejected]: (state) => {
            state.articles.items = [];
            state.articles.status = 'error';
        },
    }
});

export const articlesReducer = articlesSlice.reducer;

