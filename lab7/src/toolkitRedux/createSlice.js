import { createSlice } from "@reduxjs/toolkit";
// import { fetchUsers } from "../store/actions/users";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    counter: 20,
    users: [],
  },
  reducers: {
    increment(state) {
      state.counter = state.counter + 10;
    },
    decrement(state) {
      state.counter = state.counter - 10;
    },
    addUser(state, action) {
      state.users.push(action.payload);
    },
    removeUser(state) {
      state.users.pop();
    },
  },
  //   extraReducers: {
  //     [fetchUsers.fulfilled]: (state, action) => {
  //       state.users.push(action.payload);
  //     },
  //   },
});

export default toolkitSlice.reducer;
export const { increment, decrement, addUser } = toolkitSlice.actions;
