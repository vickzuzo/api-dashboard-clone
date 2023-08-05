import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  showAppLoader: boolean;
}

const userInitState: IAppState = {
  showAppLoader: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInitState,
  reducers: {
    onOpenAppLoader: (state) => {
      return { ...state, showAppLoader: true };
    },
    onCloseAppLoader: (state) => {
      return { ...state, showAppLoader: false };
    },
  },
});

export const { onOpenAppLoader, onCloseAppLoader } = userSlice.actions;
export default userSlice.reducer;
