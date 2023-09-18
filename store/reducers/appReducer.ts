import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  showAppLoader: boolean;
}

const appInitState: IAppState = {
  showAppLoader: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState: appInitState,
  reducers: {
    onOpenAppLoader: (state) => {
      return { ...state, showAppLoader: true };
    },
    onCloseAppLoader: (state) => {
      return { ...state, showAppLoader: false };
    },
  },
});

export const { onOpenAppLoader, onCloseAppLoader } = appSlice.actions;
export default appSlice.reducer;
