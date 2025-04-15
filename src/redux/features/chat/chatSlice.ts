import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  receiverId: string | null;
}

const initialState: IInitialState = {
  receiverId: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addReceiverId: (state, action) => {
      state.receiverId = action.payload;
    },
  },
});

export const { addReceiverId } = chatSlice.actions;

export default chatSlice.reducer;
