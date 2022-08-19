import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

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
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    updateAnecdote(state, action) {
      return state.map((anecdote) =>
        anecdote.id === action.payload.id ? action.payload : anecdote
      );
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const {
  voteFor,
  appendAnecdote,
  updateAnecdote,
  setAnecdotes,
} = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const createdAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(createdAnecdote));
  };
};

export const voteForAnecdote = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = { ...anecdote, votes: anecdote["votes"] + 1 };
    const updatedAnecdote = await anecdoteService.update(votedAnecdote);
    dispatch(updateAnecdote(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
