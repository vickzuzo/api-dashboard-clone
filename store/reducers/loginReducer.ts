import { createSlice } from "@reduxjs/toolkit";

interface ILoginProps {
  email: string;
  password: string;
}

interface ILoginState {
  showLoginForm: boolean;
  showLoginWithPasswordForm: boolean;
  data: ILoginProps
}

const loginInitState: ILoginState = {
  showLoginForm: true,
  showLoginWithPasswordForm: false,
  data: {
    email: "",
    password: "",
  }
};

export const loginSlice = createSlice({
  name: "login",
  initialState: loginInitState,
  reducers: {
    onOpenLoginWithPasswordForm: (state) => {
      return {...state, 
        showLoginForm: false, 
        showLoginWithPasswordForm: true,
        data: state.data
      };
    },
    onUpdateForm: (state, action  ) => {
      const { payload } = action;
      return {...state,
        data: {
          email: payload.email || state.data.email,
          password: payload.password || state.data.password
        }
      }

    },
    onOpenLoginForm: (state) => {
      return { ...state, 
        showLoginForm: true, 
        showLoginWithPasswordForm: false,
        data: state.data
      };
    },
  },
});

export const { onOpenLoginWithPasswordForm, onOpenLoginForm, onUpdateForm } = loginSlice.actions;
export default loginSlice.reducer;
