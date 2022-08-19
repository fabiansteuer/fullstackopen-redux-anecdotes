import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = [];

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    voteFor(state, action) {
      const anecdoteId = action.payload;
      return state.map((anecdote) =>
        anecdote.id === anecdoteId
          ? { ...anecdote, votes: anecdote["votes"] + 1 }
          : anecdote
      );
    },
    addAnecdote(state, action) {
      const anecdote = action.payload;
      state.push(anecdote);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { voteFor, addAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
