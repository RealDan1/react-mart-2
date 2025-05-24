import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  password: string;
}

interface UserState {
  users: User[];
  isLoggedIn: boolean;
  currentUser: User | null;
}

const initialState: UserState = {
  users: [
    {
      username: 'JamesMay',
      password: '12345',
    },
  ],
  isLoggedIn: false,
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; password: string }>) => {
      const { username, password } = action.payload;
      const foundUser = state.users.find((user) => user.username === username && user.password === password);
      if (foundUser) {
        state.isLoggedIn = true;
        state.currentUser = foundUser;
      } else {
        alert('Wrong username or password.');
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
