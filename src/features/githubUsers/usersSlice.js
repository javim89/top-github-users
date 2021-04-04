import { createSlice } from '@reduxjs/toolkit';

export const githubUsersSlice = createSlice({
  name: 'githubUsers',
  initialState: {
    users: ["GrahamCampbell","fabpot","weierophinney","rkh","josh"],
    selectedUsername: "",
    selectUser: {},
    isLoading: false,
    currentLocation: ""
  },
  reducers: {
    selectedUsername: (state,action) => {
      state.selectedUsername = action.payload;
    },
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    selectUser: (state,action) => {
      state.selectUser = action.payload
    },
    currentLocation : (state, action) => {
      state.currentLocation = action.payload
    }
  },
});

export const { selectedUsername, toggleLoading, selectUser, currentLocation } = githubUsersSlice.actions;


export const getUserData =  (username) => async dispatch => {
  dispatch(toggleLoading())
  const result = await fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => dispatch(selectUser(data)))
  dispatch(toggleLoading())
};

export const selectGithubUsers = state => state.githubUsers.value;

export default githubUsersSlice.reducer;
