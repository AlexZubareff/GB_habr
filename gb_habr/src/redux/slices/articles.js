import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

// ПОЛУЧЕНИЕ ВСЕХ СТАТЕЙ
export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    const {data} = await axios.get('/posts');
    console.log(data);
    return data;
}); 

// ПОЛУЧЕНИЕ ВСЕХ СТАТЕЙ ПОЛЬЗОВАТЕЛЯ
export const fetchAllUserArticles = createAsyncThunk('articles/fetchAllUserArticles', async (userId) => {
    const {data} = await axios.get(`/posts/user/${userId}`);
    console.log(data);
    return data;
}); 


// УДАЛЕНИЕ СТАТЬИ

export const fetchRemoveArticle = createAsyncThunk('articles/fetchRemoveArticle', async (id) => 
    await axios.delete(`/posts/${id}`)
); 


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
        //Полоучение статей        
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
                //Полоучение статей  пользователя      
                [fetchAllUserArticles.pending]: (state) => {
                    state.articles.items = [];
                    state.articles.status = 'loading'
                },
                [fetchAllUserArticles.fulfilled]: (state, action) => {
                    state.articles.items = action.payload;
                    state.articles.status = 'loaded';
                },
                [fetchAllUserArticles.rejected]: (state) => {
                    state.articles.items = [];
                    state.articles.status = 'error';
                },
        
        // Удаление статьи
        [fetchRemoveArticle.pending]: (state, action) => {
            state.articles.items = state.articles.items.filter(obj => obj.id !== action.meta.arg);
        },
    }
});

export const articlesReducer = articlesSlice.reducer;

