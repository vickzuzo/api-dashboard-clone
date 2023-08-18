import { createSlice } from "@reduxjs/toolkit";

interface IRegisterProps {
  email: string;
  password: string;
}

interface IRegisterState {
  showRegisterForm: boolean;
  data: IRegisterProps
}

const registerInitState: IRegisterState = {
  showRegisterForm: true,
  data: {
    email: '',
    password: ''
  }
};

export const registerSlice = createSlice({
  name: "register",
  initialState: registerInitState,
  reducers: {
    onOpenRegisterForm: (state) => {
      return { ...state, 
        showRegisterForm: true, 
      };
    },
  },
});

export const { onOpenRegisterForm } = registerSlice.actions;
export default registerSlice.reducer;
