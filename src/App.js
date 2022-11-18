import React, { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, asyncIncrement } from "./actions";

export default function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Counter />
    </div>
  );
}

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counterReducer);

  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };
  const onReset = () => {
    dispatch(reset());
  };

  const onAsyncIncrement = () => {
    dispatch(asyncIncrement());
  };

  return (
    <div>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
      <button onClick={onAsyncIncrement}>async</button>
      <button onClick={onReset}>RESET</button>
      <h1>{counter.count}</h1>
    </div>
  );
};
