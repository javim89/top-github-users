import { configureStore } from '@reduxjs/toolkit';
import githubUserReducer from "../features/githubUsers/usersSlice"

export default configureStore({
  reducer: {
    githubUsers: githubUserReducer
  },
});
