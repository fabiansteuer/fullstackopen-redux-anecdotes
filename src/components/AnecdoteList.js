import { useSelector, useDispatch } from "react-redux";
import { voteFor } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) =>
    state.sort((a, b) => b.votes - a.votes)
  );

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            {anecdote.votes} votes{" "}
            <button onClick={() => dispatch(voteFor(anecdote.id))}>Vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
