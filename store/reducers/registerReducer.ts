import { createSlice } from "@reduxjs/toolkit";

interface IRegisterProps {
  avatar: string;
  first_name: string;
  last_name: string;
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
    avatar: '',
    first_name: '',
    last_name: '',
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
    onUpdateRegisterForm: (state, action  ) => {
      const { payload } = action;
      return {...state,
        data: {
          avatar: payload.email || state.data.avatar,
          first_name: payload.first_name || state.data.first_name,
          last_name: payload.last_name || state.data.last_name,
          email: payload.email || state.data.email,
          password: payload.password || state.data.password
        }
      }

    },
    onCloseRegisterForm: (state) => {
      return { ...state, 
        showRegisterForm: false, 
      };
    },

  },
});

export const { onOpenRegisterForm, onCloseRegisterForm, onUpdateRegisterForm } = registerSlice.actions;
export default registerSlice.reducer;
