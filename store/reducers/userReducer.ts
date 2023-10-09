import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  accountEnabled: boolean;
  subscriptionStatus: string;
}

const userInitState: IAppState = {
  accountEnabled: false,
  subscriptionStatus: "UNSUBSCRIBED",
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInitState,
  reducers: {
    updateAppUser: (state, payload: { payload: IAppState; type: string }) => {
      return { ...state, ...payload.payload };
    },
    logoutUser: (state) => {
      return userInitState;
    },
  },
});

export const { updateAppUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
