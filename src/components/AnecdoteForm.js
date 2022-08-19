import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    dispatch(createAnecdote(content));

    event.target.anecdote.value = "";

    dispatch(setNotification("Anecdote created.", 3));
  };

  return (
    <form onSubmit={addAnecdote}>
      <div>
        <input name="anecdote" />
      </div>
      <button typo="submit">Add</button>
    </form>
  );
};

export default AnecdoteForm;
