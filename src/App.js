import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Game from "./styled-components/GameCard";
import ChangeColor from "./components/ChangeColor";

function App() {
  const { count } = useSelector((state) => state.counter);
  //const count = useSelector((state) => state.counter.count)

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        increment by 33
      </button>

      <div>
        <Profile />
        <Login />
        <ChangeColor />

        <Game />
      </div>
    </div>
  );
}

export default App;
