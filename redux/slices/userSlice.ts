import { options } from "@/app/api/auth/[...nextauth]/options";
import { ProductType, UserType } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getServerSession } from "next-auth";
const initialState: UserType = {
  email: "",
  image: "",
  cart: [],
};
//to make any side effects, use the method: createAsyncThunk() from reduxToolkit.
// const getUserSession = createAsyncThunk(
//   "userSlice/getUserSession",
//   async () => {
//     const session = await getServerSession(options);

//     return session?.user as UserType;
//   }
// );
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    signInAction: (_state, action: PayloadAction<UserType>) => {
      return {
        email: action.payload.email,
        image: action.payload.image,
        cart: action.payload.cart,
      };
    },
    signOutAction: () => {
      return initialState;
    },
    setUserCart: (state, action: PayloadAction<ProductType[]>) => {
      state.cart = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getUserSession.fulfilled, (state, action) => {
  //     signInAction(action.payload ?? initialState);
  //   });
  //   builder.addCase(getUserSession.rejected, (state, action) => {
  //     signOutAction();
  //   });
  // },
});

export const { signInAction, signOutAction, setUserCart } = userSlice.actions;
export default userSlice.reducer;
