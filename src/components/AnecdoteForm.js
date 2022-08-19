import { useDispatch } from "react-redux";
import anecdoteService from "../services/anecdotes";
import { addAnecdote } from "../reducers/anecdoteReducer";
import {
  createNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const createAnecdote = async (event) => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";

    const createdAnecdote = await anecdoteService.createNew(anecdote);
    dispatch(addAnecdote(createdAnecdote));

    dispatch(createNotification("Anecdote created."));
    setTimeout(() => dispatch(removeNotification()), 3000);
  };

  return (
    <form onSubmit={createAnecdote}>
      <div>
        <input name="anecdote" />
      </div>
      <button typo="submit">Create</button>
    </form>
  );
};

export default AnecdoteForm;
