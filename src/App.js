import { useSelector, useDispatch } from "react-redux";
import { voteFor } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

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
      <form>
        <div>
          <input />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default App;
