import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  item: [],
  isLoading: false,
  error: "",
};

export const fetchPizza = createAsyncThunk("item/fetchPizza", async () => {
  const response = await axios.get(
    "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
  );
  return response.data.data.recipes;
});

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
  },
});

export default pizzaSlice.reducer;
