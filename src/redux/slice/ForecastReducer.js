import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "default",
  data: undefined,
};
const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default forecastSlice.reducer;
