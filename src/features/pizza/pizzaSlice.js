import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  item: [],
  details: {},
  comments: [],
  isLoading: false,
  error: "",
};

export const fetchPizza = createAsyncThunk("item/fetchPizza", async () => {
  const response = await axios.get(
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
  );
  return response.data.data.recipes;
});

export const fetchPizzaDetails = createAsyncThunk(
  "item/fetchPizzaDetails",
  async (id) => {
    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza/${id}`
    );
    return response.data.data.recipes;
  }
);

export const fetchPizzaDetailsComments = createAsyncThunk(
  "item/fetchPizzaDetailsComments",
  async (id) => {
    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    return response.data.data.recipe.ingredients;
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchPizzaDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPizzaDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPizzaDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchPizzaDetailsComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPizzaDetailsComments.fulfilled, (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPizzaDetailsComments.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default pizzaSlice.reducer;
