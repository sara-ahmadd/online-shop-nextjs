import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { text: "" };

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  
});
export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;
