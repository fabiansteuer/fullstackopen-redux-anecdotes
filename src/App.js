import { useSelector, useDispatch } from "react-redux";
import { voteFor, createAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => b.votes - a.votes)
  );

  const addAnecdote = (event) => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";

    dispatch(createAnecdote(anecdote));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            {anecdote.votes} votes{" "}
            <button onClick={() => dispatch(voteFor(anecdote.id))}>Vote</button>
          </div>
        </div>
      ))}
      <h2>Create New</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button typo="submit">Create</button>
      </form>
    </div>
  );
};

export default App;
