import { useSelector, useDispatch } from "react-redux";
import { voteFor } from "../reducers/anecdoteReducer";
import {
  createNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) =>
    [...state.anecdotes].sort((a, b) => b.votes - a.votes)
  );

  const vote = (anecdote) => {
    dispatch(voteFor(anecdote.id));

    dispatch(createNotification(`You voted for ${anecdote.content}`));
    setTimeout(() => dispatch(removeNotification()), 3000);
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            {anecdote.votes} votes{" "}
            <button onClick={() => vote(anecdote)}>Vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
