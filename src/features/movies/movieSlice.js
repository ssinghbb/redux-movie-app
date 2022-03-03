import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";

    const res = await MovieApi.get(
      `?apiKey=${APIkey}&s=${movieText}&type=movie`
    );
    return res.data;
  }
);
export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const seriesText = "Friends";

    const res = await MovieApi.get(
      `?apiKey=${APIkey}&s=${seriesText}&type=series`
    );
    return res.data;
  }
);
export const fetchAsyncMovieOrSeriesDetails = createAsyncThunk(
  "movies/fetchAsyncMovieOrSeriesDetails",
  async (id) => {
    const res = await MovieApi.get(`?apiKey=${APIkey}&i=${id}&Plot="full`);
    return res.data;
  }
);
const initialState = {
  movies: {},
  series: {},
  selectMovieOrSeriesDetail: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    
    removeSelectedMovieOrSeries: (state) => {
      state.selectMovieOrSeriesDetail = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fullfilled", payload);
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("fullfilled", payload);
      return { ...state, series: payload };
    },
    [fetchAsyncMovieOrSeriesDetails.fulfilled]: (state, { payload }) => {
      console.log("fullfilled", payload);
      return { ...state, selectMovieOrSeriesDetail: payload };
    },
  },
});

export const { removeSelectedMovieOrSeries } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getMovieOrSeriesDetail = (state) =>
  state.movies.selectMovieOrSeriesDetail;
export default movieSlice.reducer;
