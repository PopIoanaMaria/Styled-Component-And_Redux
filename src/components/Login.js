import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: "Ioana", age: 24, email: "ioana@gmail.com" }))
        }
      >
        Log in
      </button>
      <button onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
}

export default Login;
