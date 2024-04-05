import { useDispatch, useSelector } from "react-redux";
import { AppDispatcher, RootState } from "../state/store";
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
  incrementWithArgument,
} from "../state/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });

  const dispatch = useDispatch<AppDispatcher>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementWithArgument(5))}>
          IncrementWith5
        </button>
        <button onClick={() => dispatch(incrementAsync(3))}>
          IncrementWithAsync3
        </button>
      </div>
    </div>
  );
}
