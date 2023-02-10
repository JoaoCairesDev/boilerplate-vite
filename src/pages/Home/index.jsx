import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/module/rootReducer";

export default function Home() {
  //traz o dado do reducer
  const count = useSelector((state) => state.counter.value);
  //dispara ações para o reducer
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment Value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span> {count} </span>
        <button
          aria-label="Decrement Value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
